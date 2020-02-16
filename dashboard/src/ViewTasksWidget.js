import React, { Component } from 'react';
import styled from "styled-components";

const EfficiencyTitleBar = styled.span`
  font-family: 'Karla', sans-serif;
  padding: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;
  background-color: ${props => props.colour};
  transition: all 0.2s;
  z-index: 1;
  color: white;
  cursor: default;
  font-weight: bold;
`

const Task = styled.tr`
  background-color: white;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  cursor: default;
  background-color: white;
  transition: 0.1s;
  white-space: pre;
  font-weight: normal;
  line-height: 35px;
  color: ${props => props.colour};

  &:hover {
    background-color: rgb(247,247,247);
    cursor: pointer;
  }

  &:active {
  }
`

const TaskGap = styled.div`
  padding-bottom: 10px;
`

export class ViewTasksWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"tasks":[]};
  }

  componentWillReceiveProps(props) {
    if (typeof(props.tasks) == "object") {

      if (this.state.tasks.length == 5) {
        return;
      }

      // Selecting the most relevent 5 tasks
      // Sort by deadline
      // Show in time border

      let tasks = props.tasks;
      var tasksDeadlineList = [];

      for (let task in tasks) {
        if (tasks[task][4] == "True") {
          continue;
        }
        var deadline = tasks[task][3];
        tasksDeadlineList.push(deadline);
      }

      // Pass through dict keys to sort by smallest to largest
      tasksDeadlineList.sort((a, b) => a - b);

      var finalTasks = [];

      for (var deadline in tasksDeadlineList.slice(0,5)) {
        for (var task in tasks) {
          // if deadline is in shortlisted deadline list and the outputted tasks list is less than 6 items
          if (tasksDeadlineList[deadline] == tasks[task][3]) {

            if (tasksDeadlineList[deadline] == tasks[task][3]) {

              if ((tasks[task][3] - (new Date).getTime()) < 0) {
                tasks[task].push("red");
              }
              else {
                tasks[task].push("black");
              }
            }

            finalTasks.push(tasks[task]);
            tasks.splice(task,1);
          }
        }
      this.setState({"tasks":finalTasks});
      }
    }
  }

  updatePage = (event) => {
    for (var index in this.state.tasks) {
      if (this.state.tasks[index][0] == event.target.id) {
        this.props.triggerParentUpdate(JSON.stringify(this.state.tasks[index][2]),"task",event.target.id);
      }
    }
  }

  render() {
    if (this.state.tasks.length) {
      return (
        <html class="widget" style={{"width":"fit-content"}}>
          <EfficiencyTitleBar colour="#7B91FF">Tasks Overview</EfficiencyTitleBar>
          <TaskGap />
          <table style={{"border-collapse":"collapse","font-size":"large"}}>
            <tr style={{"line-height":"30px"}}>
              <th>Name</th>
              <th>Project</th>
              <th>Due</th>
            </tr>
            {this.state.tasks.map((task,i) => <Task colour={task[5]} onClick={this.updatePage}><td id={task[0]}>{task[2]}</td><td id={task[0]}>{task[1]}</td><td id={task[0]}>{(new Date(task[3])).getDate().toString()}/{((new Date(task[3])).getMonth()+1).toString()}/{((new Date(task[3])).getYear()-100).toString()}</td></Task>)}
          </table>
          <TaskGap />
        </html>
      )
    }
    else {
      return (
        <html class="widget">
          <EfficiencyTitleBar colour="#7B91FF">Tasks Overview</EfficiencyTitleBar>
          <p/>
          You currently do not have any assigned tasks
          <p/>
        </html>
      )
    }
  }
}
