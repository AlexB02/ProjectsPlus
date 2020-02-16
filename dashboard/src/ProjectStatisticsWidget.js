import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import styled from "styled-components";

const TitleBar = styled.span`
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
  text-align: center;
`

const StatisticCircle = styled.td`
  width: 20%;
`

const CircleGap = styled.td`
  width: 20%;
`

export class ProjectStatisticsWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tasksCirclePercent:0,
                  completetasksnumber:0,
                  tasksnumber:0,
                  tasksCircleColour:"#000000"
                };
    if (props.tasksnumber) {
      try {
        this.setState({tasksCirclePercent:(props.completetasksnumber / props.tasksnumber)*100});
      }
      catch (e){};
    }
  }

  componentWillReceiveProps(props) {
    if (props.tasksnumber) {
      try {
        this.setState({tasksCirclePercent:(props.completetasksnumber / props.tasksnumber)*100});
        if ((props.completetasksnumber / props.tasksnumber)*100 < 34) {
          this.setState({tasksCircleColour:"#DE614A"})
        }
        else if ((props.completetasksnumber / props.tasksnumber)*100 < 68) {
          this.setState({tasksCircleColour:"#FF8429"})
        }
        else if ((props.completetasksnumber / props.tasksnumber)*100 < 101) {
          this.setState({tasksCircleColour:"#00CC66"})
        }
      }
      catch (e) {};
    }
    if (props.projectEfficiency) {
      try {
        if (props.projectEfficiency < 34) {
          this.setState({efficiencyCircleColour:"#DE614A"})
        }
        else if (props.projectEfficiency < 68) {
          this.setState({efficiencyCircleColour:"#FF8429"})
        }
        else if (props.projectEfficiency < 101) {
          this.setState({efficiencyCircleColour:"#00CC66"})
        }
      }
      catch (e) {};
    }
  }

  render() {
    return (
      <html class="widget">
        <TitleBar colour="#0094A2">Statistics</TitleBar>
        <p />
        <table>

          <CircleGap />

          <StatisticCircle>
            <div>Project Completion</div>
            <p/>
            <div>{Math.round(this.state.tasksCirclePercent)}%</div>
            <Circle percent={this.state.tasksCirclePercent} strokeWidth="4" strokeColor={this.state.tasksCircleColour}/>
          </StatisticCircle>

          <CircleGap />

          <StatisticCircle>
            <div>Average efficiency</div>
            <p/>
            <div>{Math.round(this.props.projectEfficiency)}%</div>
            <Circle percent={this.props.projectEfficiency} strokeWidth="4" strokeColor={this.state.efficiencyCircleColour}/>
          </StatisticCircle>

          <CircleGap />

        </table>
        <p />
      </html>
    )
  }
}
