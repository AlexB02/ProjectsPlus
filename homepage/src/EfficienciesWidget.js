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
  border-radius: 4px;
  align-items: left;
`

const ProgressFillUp = styled.div`
  width: ${props => props.percentage}%;
  height: 20px;
  background-color: ${props => props.colour};
  border-radius: 1px;
`

class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"fillup":(props.efficiency/200)*100,"barColour":"#00CC66"};

    if (props.efficiency >= 100) {
      this.state.barColour = "#00CC66";
    }
    else if (props.efficiency >= 50) {
      this.state.barColour = "#FF8429";
    }
    else if (props.efficiency < 50){
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
  margin-left: ${props => props.leftMargin}px;
  margin-top: -7px;
`;

class EfficiencySkillAbbrv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"abbrv":props.abbrv,"skillTitle":props.skillTitle,"efficiency":props.efficiency,"ToolTipTextVisible":0}
  }

  componentWillReceiveProps (props) {
    if (props.abbrv) {
      this.setState({"abbrv":props.abbrv})
    }
    else if (props.skillTitle) {
      this.setState({"skillTitle":props.skillTitle})
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
    if (this.state.abbrv) {
      return (
        <html>
          <button onClick={this.updateVisibility} class="progressBarSkill" title="Click to view more detail">{this.props.abbrv}</button>
          <ToolTipText visible={this.state.ToolTipTextVisible} leftMargin={Math.round(30-1.5*this.props.abbrv.length)}>{this.props.skillTitle}: {this.props.efficiency}/200</ToolTipText>
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
    this.state = {"percentageEfficiency":Math.round((props.efficiency/200)*100)};
  }

  render() {
    this.state = {"percentageEfficiency":Math.round((this.props.efficiency/200)*100)};
    if (this.props) {
      return (
        <html>
          <div class="progressBarEfficiencyValue">{this.state.percentageEfficiency}%</div>
          <table class="EfficienciesTable" align="centre">
            <tr>
              <td class="progressBarSkillTD"><EfficiencySkillAbbrv class="progressBarSkill" abbrv={this.props.skillAbbrv} skillTitle={this.props.skillTitle} efficiency={this.props.efficiency}/></td>
              <td class="progressBarBarTD"><div class="progressBarBar"><ProgressBar efficiency={this.props.efficiency}/></div></td>
            </tr>
          </table>
        </html>
      )
    }
    else {
      return (
        <div>No props</div>
      )
    }
  }
}

export class EfficienciesWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "title":"",
      "data":[],
      "presentableData":"",
      "length":5,
      "lengthIfDataSmallerThanLength":props.data.length
  };
    this.setState({"data":props.data});
    this.setState({"presentableData": this.dataToPresent(props.data)});
    this.state.title = props.title;
    this.setState({"length":props.length});
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.data) {
        this.setState({"data": nextProps.data});
        this.setState({"presentableData": this.dataToPresent(nextProps.data)});

      }
      if (nextProps.title) {
        this.setState({"title":nextProps.title});
      }
      if (nextProps.length) {
        this.setState({"length":nextProps.length});
      }
    }
  }

  updateLength = () => {
    if (this.state.length > this.state.data.length) {
      return this.state.data.length;
    }
    else {
      return this.state.length;
    }
  }

  dataToPresent = (data) => {
    var presentable;

    if (!data) {
      return (
        <div>No data in props</div>
      )
    }
    else {
      try {
        if ((this.state.title) && (data.length) && !(this.state.length === 0)) {

          if (data.length < this.state.length) {
            this.setState({"length":data.length});
            presentable = data.slice(0,data.length);
          }

          else {
            presentable = data.slice(0,this.state.length);
          }

          return (
            <span>
            {presentable && presentable.length && presentable.map((skill, i) => React.createElement(EfficiencyProgress, {"skillTitle":skill["skillTitle"],"skillAbbrv":skill["skillAbbrv"],"efficiency":skill["avg"]}))}
            </span>
          );
        }
        else if (!this.state.title) {
          return (
            <div>No title</div>
          )
        }
        else if (!data.length) {
          const divStyle = {
            margin: '10px',
            "padding-left": "3vw",
            "padding-right": "3vw"
          };
          return (
            <html style={divStyle}>
              <div>You don't have any skills yet!</div><br/>
              <div>Complete tasks to see your statistics</div>
             </html>
          )
        }
        else if (this.state.length === 0) {
          return (
            <div>No length</div>
          )
        }
      }
      catch (e) {
        console.log("Present data error");
        return;
      }
    }
  };

  increaseLength = () => {
    if (this.state.length < this.state.data.length) {
      this.setState({"length":this.state.length+=1});
      this.setState({"presentableData": this.dataToPresent(this.state.data)});
    }
  }
  decreaseLength = () => {
    if (this.state.length > 1) {
      this.setState({"length":this.state.length-=1});
      this.setState({"presentableData": this.dataToPresent(this.state.data)});
    }
  }

  render() {
    return (
        <html className="widget">
          <span>
            <b>{this.state.title} </b>
            {this.updateLength()}/{this.state.data.length}
            <button class="ArrowButton" onClick={this.increaseLength} title="Show more"><img class="arrowsvg" src={downarrow} title="Show more"/></button>
            <button class="ArrowButton" onClick={this.decreaseLength} title="Show less"><img class="arrowsvg" src={uparrow} title="Show less"/></button>
          </span>
          <div class="efficiencyWidgetData">{this.state.presentableData}</div>
        </html>
    )
  };
};
