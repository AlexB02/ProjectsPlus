import React, { Component } from 'react';
import styled from "styled-components";
import Switch from '@material-ui/core/Switch';
import $ from 'jquery';
import Popup from "reactjs-popup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const AddTaskSubmitDiv = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  cursor: default;
  background-color: white;
  transition: 0.1s;
  white-space: pre;
  font-weight: normal;
  line-height: 35px;
  color: #a2a2a2;
  text-align: center;
  border-style: solid;
  border-width: thin;
  border-color: silver;
  border-radius: 6px;

  &:hover {
    background-color: rgb(247,247,247);
    cursor: pointer;
  }
`

const Task = styled.tr`
  width: 50%;
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

export class ProjectViewTasksWidget extends React.Component {

  updateTask = (taskid,state) => {
    let _this = this;
    $(document).ready(function(){
      // Get user details
      var req = $.ajax({url: "/updatetask",
                        type: "POST" ,
                        data: JSON.stringify({"taskid":taskid,"state":state}),
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                      });

      try {
        req.done(function(data) {});
      }
      catch (e) {};
    });
  };

  constructor(props) {
    super(props);
    this.state = {"tasks":[],"addTaskDate":(new Date()),"addTaskSuccessMessage":"","addTaskFailMessage":""};


    if (typeof(props.tasks) == "object") {

      let tasks = props.tasks;
      var tasksDeadlineList = [];
      var deadline;

      for (let task in tasks) {
        deadline = tasks[task][Object.keys(tasks[task])[0]][1];
        tasksDeadlineList.push(deadline);
      }
      // Pass through dict keys to sort by smallest to largest
      tasksDeadlineList.sort((a, b) => a - b);

      var finalTasks = [];
      var checked = [];

      for (var deadline in tasksDeadlineList) {
        for (var task in tasks) {
          // if deadline is in shortlisted deadline list and the outputted tasks list is less than 6 items
          if (tasksDeadlineList[deadline] == tasks[task][Object.keys(tasks[task])[0]][1]) {

            if ((tasks[task][Object.keys(tasks[task])[0]][1] - (new Date).getTime()) < 0) {
              var colour = "red";
            }
            else {
              var colour = "black";
            }
            if ((tasks[task][Object.keys(tasks[task])][2])=="True") {
              var colour = "green";
            }

            finalTasks.push([Object.keys(tasks[task])[0],tasks[task][Object.keys(tasks[task])[0]][0],tasks[task][Object.keys(tasks[task])[0]][1],colour,(tasks[task][Object.keys(tasks[task])][2])=="True",tasks[task][Object.keys(tasks[task])][3],tasks[task][Object.keys(tasks[task])][4]]);
            tasks.splice(task,1);
          }
        }
      this.setState({"tasks":finalTasks});
      }
    }

  }

  componentWillReceiveProps(props) {
    if (typeof(props.tasks) == "object") {

      let tasks = props.tasks;
      var tasksDeadlineList = [];
      var deadline;

      for (let task in tasks) {
        deadline = tasks[task][Object.keys(tasks[task])[0]][1];
        tasksDeadlineList.push(deadline);
      }
      // Pass through dict keys to sort by smallest to largest
      tasksDeadlineList.sort((a, b) => a - b);

      var finalTasks = [];
      var checked = [];

      for (var deadline in tasksDeadlineList) {
        for (var task in tasks) {
          // if deadline is in shortlisted deadline list and the outputted tasks list is less than 6 items
          if (tasksDeadlineList[deadline] == tasks[task][Object.keys(tasks[task])[0]][1]) {

            if ((tasks[task][Object.keys(tasks[task])[0]][1] - (new Date).getTime()) < 0) {
              var colour = "red";
            }
            else {
              var colour = "black";
            }
            if ((tasks[task][Object.keys(tasks[task])][2])=="True") {
              var colour = "green";
            }

            finalTasks.push([Object.keys(tasks[task])[0],tasks[task][Object.keys(tasks[task])[0]][0],tasks[task][Object.keys(tasks[task])[0]][1],colour,(tasks[task][Object.keys(tasks[task])][2])=="True",tasks[task][Object.keys(tasks[task])][3],tasks[task][Object.keys(tasks[task])][4]]);
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
        this.props.triggerParentUpdate(this.state.tasks[index][Object.keys(this.state.tasks[index])[0]][0],"task",event.target.id);
      }
    }
  }

  updateCheck = (event) => {
    var id = event.target.id.slice(0,event.target.id.length-1);
    for (var index in this.state.tasks) {
      if (this.state.tasks[index][0] == id) {
        var buttonState = this.state.tasks[index][4];
        var oldTasks = this.state.tasks;
        var colour;

        if (buttonState == false) {
          buttonState = true;
          colour = "green";
        }
        else {
          buttonState = false;
          if ((oldTasks[index][2] - (new Date).getTime()) < 0) {
            colour = "red";
          }
          else {
            colour = "black";
          }
        }
        oldTasks[index][4] = buttonState;
        oldTasks[index][3] = colour;
        this.setState({tasks:oldTasks});
        this.updateTask(id,buttonState);
        this.props.reloadPage();
      }
    }
  }

  addTaskDateChange = (date) => {
    this.setState({"addTaskDate":date});
  }

  addTask = () => {
    var title = $("#tasktitle").val();
    if (title == "") {
      this.setState({"addTaskFailMessage":"Task must have a title"});
      return
    }
    var description = $("#description").val();
    if (description == "") {
      this.setState({"addTaskFailMessage":"Task must have a description"});
      return
    }
    if (/^\s*$/.test(title) || /^\s*$/.test(description)) {
      window.alert("You must have a task title and description");
      return;
    }
    var deadline = this.state.addTaskDate;
    var due = new Date(deadline.getFullYear().toString() + "-" + (deadline.getMonth()+1).toString() + "-" + (deadline.getDate()+1).toString());
    deadline = due.getTime() - 1;

    var task = {"projectid":this.props.projectid,"title":title,"deadline":deadline,"description":description};
    let _this = this;
    $(document).ready(function(){
      var req = $.ajax({url: "/addtasktoproject",
                        type: "POST",
                        data: JSON.stringify(task),
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                      });

      try {
        req.done(function(data) {
          try {
            _this.setState({"addTaskSuccessMessage":"Added Task"});
            _this.props.reloadPage();
            _this.hideModal();
          }
          catch (e) {
            console.log("Error adding task");
            console.log(e);
          }
        });
      }
      catch (e) {

      }});
  }

  deleteTask = (event) => {
    var task = {"taskid":event.target.id};
    let _this = this;
    $(document).ready(function(){
      var req = $.ajax({url: "/deletetask",
                        type: "POST",
                        data: JSON.stringify(task),
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                      });
      try {
        req.done(function(data) {
          try {
            if (_this.state.tasks.length == 1) {
              _this.props.reloadPage();
              _this.setState({tasks:[]});
              _this.props.reloadPage();
            }
            else {
              _this.props.reloadPage();
            }
          }
          catch (e) {
            console.log(e);
          }
        })
      }
      catch (e) {
        console.log("DELETE TASK ERROR");
      }
  }
)
}

  render() {
    var tasks = this.state.tasks;
    if (tasks.length > 0) {
      return (
        <html class="widget">
          <EfficiencyTitleBar colour="#7B91FF">Tasks</EfficiencyTitleBar>
          <TaskGap />
          <table style={{"border-collapse":"collapse","font-size":"large"}}>
            <tr style={{"line-height":"30px"}}>
              <th>Name</th>
              <th>Due</th>
              <th>Assigned to you</th>
              <th>Complete</th>
              <th>Issues</th>
              <th></th>
            </tr>
            {tasks.map((task,i) => <Task colour={task[3]} onClick={this.updatePage}><td id={task[0]}>{task[1]}</td><td id={task[0]}>{(new Date(task[2])).getDate().toString()}/{((new Date(task[2])).getMonth()+1).toString()}/{((new Date(task[2])).getYear()-100).toString()}</td><td id={task[0]}>{task[5]}</td><td id={task[0]}><Switch id={task[0]+"s"} onChange={this.updateCheck} checked={task[4]} color="primary"/></td><td id={task[0]}>{task[6]}</td><td id={task[0]+"s"} style={{"color":"rgb(162,162,162)"}} onClick={this.deleteTask}>Delete</td></Task>)}
          </table>
          <table>
            <Task colour="rgb(162,162,162)"><td><Popup trigger={<div id="addTask" onClick={this.showModal} style={{"font-size":"large","text-align":"center"}}>Add Task +</div>} position="right center" modal style={{"border-radius":"10px"}}>
              <div style={{"color":"black","padding":"5vmin","display":"grid"}}>
                <div>Add task to project</div>
                <input id="tasktitle" type="text" class="boxinput" placeholder="title" required style={{"text-align":"center","margin-left":"auto","margin-right":"auto"}}/>
                <p style={{"margin-block-start":"0.5em","margin-block-end":"0.5em"}}/>
                <input id="description" type="text" class="boxinput" placeholder="description" required style={{"text-align":"center","margin-left":"auto","margin-right":"auto"}}/>
                <p style={{"margin-block-start":"0.5em","margin-block-end":"0.5em"}}/>
                <div>Set a deadline</div>
                <DatePicker selected={this.state.addTaskDate} onChange={this.addTaskDateChange} dateFormat="d MM yy" minDate={new Date()}/>
                <p style={{"margin-block-start":"0.5em","margin-block-end":"0.5em"}}/>
                <AddTaskSubmitDiv onClick={this.addTask}>Add</AddTaskSubmitDiv>
                <div style={{"color":"red"}}>{this.state.addTaskFailMessage}</div>
                <div style={{"color":"green"}}>{this.state.addTaskSuccessMessage}</div>
              </div>
            </Popup></td></Task>
            </table>
          <TaskGap />
        </html>
      )
    }
    else {
      return (
        <html class="widget">
          <EfficiencyTitleBar colour="#7B91FF">Tasks</EfficiencyTitleBar>
          <p/>
          This project currently does not have any tasks assigned
          <p style={{"margin-block-start":"0.5em","margin-block-end":"0.5em"}}/>
          <table>
            <Task colour="rgb(162,162,162)"><td><Popup trigger={<div id="addTask" style={{"font-size":"large","text-align":"center"}}>Add Task +</div>} position="right center" modal style={{"border-radius":"10px"}}>
              <div style={{"color":"black","padding":"5vmin","display":"grid"}}>
                <div>Add task to project</div>
                <input id="tasktitle" type="text" class="boxinput" placeholder="title" required style={{"text-align":"center","margin-left":"auto","margin-right":"auto"}}/>
                <p style={{"margin-block-start":"0.5em","margin-block-end":"0.5em"}}/>
                <input id="description" type="text" class="boxinput" placeholder="description" required style={{"text-align":"center","margin-left":"auto","margin-right":"auto"}}/>
                <p style={{"margin-block-start":"0.5em","margin-block-end":"0.5em"}}/>
                <div>Set a deadline</div>
                <DatePicker selected={this.state.addTaskDate} onChange={this.addTaskDateChange} dateFormat="d MM yy" minDate={new Date()}/>
                <p style={{"margin-block-start":"0.5em","margin-block-end":"0.5em"}}/>
                <AddTaskSubmitDiv onClick={this.addTask}>Add</AddTaskSubmitDiv>
                <div style={{"color":"red"}}>{this.state.addTaskFailMessage}</div>
                <div style={{"color":"green"}}>{this.state.addTaskSuccessMessage}</div>
              </div>
            </Popup></td></Task>
            </table>
        </html>
      )
    }
  }
}
