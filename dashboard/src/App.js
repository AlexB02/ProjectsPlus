import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';
import $ from 'jquery';

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
  background: #00CC66;
  border-radius: 1px;
`

class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"fillup":(props.efficiency/200)*100};
  }

  render() {
    return (
      <html>
      <Tracker>
      <ProgressFillUp percentage={this.state.fillup}/>
      </Tracker>
      </html>
    )
  }
}

class EfficiencyProgress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"skillAbbrv":props.skillAbbrv,"skillTitle":props.skillTitle,"efficiency":props.efficiency,"percentageEfficiency":Math.round((props.efficiency/200)*100)};
  }

  render() {
    return (
      <html>
        <div class="efficiencyWidgetTooltip">
          <div class="progressBarEfficiencyValue">{this.state.percentageEfficiency}%</div>
          <table class="EfficienciesTable" align="centre">
            <tr>
              <td class="progressBarSkillTD"><div class="progressBarSkill">{this.state.skillAbbrv}</div></td>
              <td class="progressBarBarTD"><div class="progressBarBar"><ProgressBar efficiency={this.state.efficiency}/></div></td>
            </tr>
          </table>
          </div>
          <span class="efficiencyWidgetTooltipText">{this.state.skillTitle}: {this.state.efficiency}/200</span>
      </html>
    )
  }
}

class EfficienciesWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"title":"","data":[],"presentableData":"","length":5};
    this.setState({"data":props.data});
    this.setState({"presentableData": this.dataToPresent(props.data)});
    this.state.title = props.title;
    this.setState({"length":props.length});
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props.value) {
      if (nextProps.data) {
        this.setState({"data": nextProps.data});
        this.setState({"presentableData": this.dataToPresent(nextProps.data)});
      }
      else if (nextProps.title) {
        this.setState({"title":nextProps.title});
      }
      else {
        this.setState({"title":nextProps.title});
        this.setState({"data": nextProps.data});
        this.setState({"presentableData": this.dataToPresent(nextProps.data)});
      }
    }
  }

  dataToPresent(data) {
    var presentable;

    if (!data) {
      presentable = [];
    }
    else {
      try {
        if (data.length < this.state.length) {
          this.setState({"length":data.length});
          presentable = data.slice(0,data.length);
        }
        else {
          presentable = data.slice(0,this.state.length);
        }
      }
      catch (e) {}
    }

    return (

      <div>
      {presentable && presentable.length && presentable.map((skill, i) => React.createElement(EfficiencyProgress, {"skillTitle":skill["skillTitle"],"skillAbbrv":skill["skillAbbrv"],"efficiency":skill["avg"]}))}
      </div>
    );
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
        <span class="EfficiencyWidgetTitleBar">
          <b>{this.state.title} </b>
          <button onClick={this.increaseLength}>Up</button>
          <button onClick={this.decreaseLength}>Down</button>
        </span>
        <div class="efficiencyWidgetData">{this.state.presentableData}</div>
      </html>
    )
  };
};

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"username":"","page":""};
    this.setState({"username":props.username});
    this.setState({"page":props.page});
  }

  componentWillReceiveProps(props) {
    this.setState({"username":props.username});
    this.setState({"page":props.page});
  }

  logOut = () => {
    window.location.href = "/";
  }

  render () {
    return (
      <html>
      <div className="NavBar">
      <a class="pageStateNavBar">{this.state.page}</a>
      <b><a>Welcome, {this.state.username}</a></b>
      <b><a><button onClick={this.logOut}>Log Out</button></a></b>
      </div>
      </html>
  )
  }
}

class Profile extends React.Component {

///////////////////////////////////////////////////////////////////
// Initialisation function/////////////////////////////////////////
///////////////////////////////////////////////////////////////////

  getUserData = () => {
    let _this = this;
    $(document).ready(function(){
      // Get user details
      var req = $.ajax({url: "/getuser",
                        type: "POST" ,
                        data: []
                      });

      try {
        req.done(function(data) {
          _this.setState({username: data.username});
          _this.setState({timeEfficienciesMax: data.timeEfficienciesMax});
          _this.setState({timeEfficienciesMin: data.timeEfficienciesMin});
          _this.setState({scheduleEfficienciesMax: data.scheduleEfficienciesMax});
        });
      }
      catch (e) {};
    });
  };

  constructor(props) {

    super(props);

    // Setup all state variables for the body
    this.state = {
      username: "",
      timeEfficienciesMax: {},
      timeEfficienciesMin: {},
      scheduleEfficienciesMax: {}
    }
    this.getUserData();

  }

  render() {
      return (
      <html>
      <NavBar className="NavBar" username={this.state.username} page="Your Profile"/>
      <body className="Body">
      <div className="widgets">
        <div className="widgets-column">
          <EfficienciesWidget title="Best Max Time Efficiencies" data={this.state.timeEfficienciesMax} length={5} />
          <div className="verticalWidgetGap"/>
          <EfficienciesWidget title="Best Max Time Efficiencies" data={this.state.timeEfficienciesMax} length={5} />
          <div className="verticalWidgetGap"/>
          <EfficienciesWidget title="Best Max Time Efficiencies" data={this.state.timeEfficienciesMax} length={5} />
        </div>
        <div className="horizontalWidgetGap" />
        <div className="widgets-column">
          <EfficienciesWidget title="Worst Min Time Efficiencies" data={this.state.timeEfficienciesMin} length={5} />
          <div className="verticalWidgetGap"/>
          <EfficienciesWidget title="Best Max Time Efficiencies" data={this.state.timeEfficienciesMax} length={5} />
          <div className="verticalWidgetGap"/>
          <EfficienciesWidget title="Best Max Time Efficiencies" data={this.state.timeEfficienciesMax} length={5} />
        </div>
      </div>
      </body>

      <footer className="footer">
      <b>Alex Bainbridge 2019-2020 NEA</b>
      </footer>
      </html>
    );
  };
};

export class Body extends React.Component {
  render() {
    return (
      <Profile />
    )
  }
}
