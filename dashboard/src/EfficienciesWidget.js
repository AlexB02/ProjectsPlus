import React, { Component } from 'react';
import uparrow from "./img/up-arrow.svg";
import downarrow from "./img/down-arrow.svg";
import styled from "styled-components";

const Tracker = styled.div`
  width: 100%;
  height: 20px;
  background: #FFFFFF;
  border-color: #bebebe;
  border-style: solid;
  border-width: 1.8px;
  border-radius: 4px;
  align-items: left;
`

const ProgressFillUp = styled.div`
  width: ${props => props.percentage}%;
  background-color: ${props => props.colour};
  height: 20px;
  border-radius: 1px;
`

class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"fillup":props.efficiency,"barColour":"#00CC66"};

    if (props.efficiency >= 68) {
      this.state.barColour = "#00CC66";
    }
    else if (props.efficiency >= 34) {
      this.state.barColour = "#FF8429";
    }
    else if (props.efficiency < 34){
      this.state.barColour = "#DE614A";
    }
  }

  render() {
    return (
      <html>
      <Tracker>
      <ProgressFillUp percentage={this.state.fillup} colour={this.state.barColour}/>
      </Tracker>
      </html>
    )
  }
}

const ToolTipText = styled.span`
  opacity: ${props => props.visible};
  padding: 10px;
  z-index: 1;
  position: absolute;
  background-color: #FFB5A5
  border-radius: 5px;
`;

class TaskTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"tasktitle":props.tasktitle,"ProjectTitle":props.ProjectTitle,"efficiency":props.efficiency,"ToolTipTextVisible":0}
  }

  componentWillReceiveProps (props) {
    if (props.tasktitle) {
      this.setState({"tasktitle":props.tasktitle})
    }
    else if (props.ProjectTitle) {
      this.setState({"ProjectTitle":props.ProjectTitle})
    }
    else if (props.efficiency) {
      this.setState({"efficiency":props.efficiency});
    }
  }

  updateVisibility = () => {
    if (this.state.ToolTipTextVisible === 0) {
      this.setState({"ToolTipTextVisible":0.95})
    }
    else {
      this.setState({"ToolTipTextVisible":0})
    }
  }

  render() {
    if (this.state.tasktitle) {
      var title = this.props.ProjectTitle + ": " + this.props.efficiency + "/200";
      return (
        <html>
          <button onClick={this.updateVisibility} class="progressBarSkill" title={this.props.ProjectTitle+": "+this.props.efficiency+"/100"}>{this.props.tasktitle}</button>
        </html>
      )
    }
    else {
      return (
        <div>Error</div>
      )
    }
  }
}

class EfficiencyProgress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"percentageEfficiency":Math.round(props.efficiency)};
  }

  render() {
    this.state = {"percentageEfficiency":Math.round(this.props.efficiency)};
    if (this.props) {
      return (
        <tr>
          <td style= {{"width":"40%"}} class="progressBarSkillTD"><TaskTitle class="progressBarSkill" tasktitle={this.props.TaskTitle} ProjectTitle={this.props.ProjectTitle} efficiency={this.props.efficiency}/></td>
          <td style={{"width":"fit-content"}}><div class="progressBarEfficiencyValue">{this.state.percentageEfficiency}%</div></td>
          <td class="progressBarBarTD"><div class="progressBarBar"><ProgressBar efficiency={this.props.efficiency}/></div></td>
        </tr>
      )
    }
    else {
      return (
        <tr>No props</tr>
      )
    }
  }
}

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
`

export class EfficienciesWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "title":"",
      "data":[],
      "presentableData":"",
  };
    this.setState({"data":props.data});
    this.state.title = props.title;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.data) {
        this.setState({"data": nextProps.data});

      }
      if (nextProps.title) {
        this.setState({"title":nextProps.title});
      }
    }
  }

  render() {
    if (this.state.data.length == 0) {
      return (
        <html class="widget">
          <EfficiencyTitleBar colour={this.props.colour}>
            <b>{this.state.title} </b>
          </EfficiencyTitleBar>
          <div className="efficiencywidgetdatawrapper">
            <div class="efficiencyWidgetData">
              <table>
              You do not have any efficiency statistics, complete tasks to see how you do
              </table>
            </div>
          </div>
        </html>
      )
    }
    else {
      return (
          <html class="widget">
            <EfficiencyTitleBar colour={this.props.colour}>
              <b>{this.state.title} </b>
            </EfficiencyTitleBar>
            <div className="efficiencywidgetdatawrapper">
              <div class="efficiencyWidgetData">
                <table>
                {this.props.data && this.props.data.length && this.props.data.map((skill, i) => React.createElement(EfficiencyProgress, {"ProjectTitle":skill["ProjectTitle"],"TaskTitle":skill["TaskTitle"],"efficiency":skill["avg"]}))}
                </table>
              </div>
            </div>
          </html>
      )
    }
  };
};
