import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';
import $ from 'jquery';

const Tracker = styled.div`
  width: 100%;
  height: 20px;
  margin: 15px auto;
  background: #FFFFFF;
  border-radius: 10px;
  border-color: #bebebe;
  border-style: solid;
  align-items: left;
`

const ProgressFillUp = styled.div`
  width: ${props => props.percentage}%;
  height: 20px;
  background: #00CC66;
  border-radius: 6px;
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
    this.state = {"text":props.text,"efficiency":props.efficiency};
  }

  render() {
    return (
      <html>
      <div>{this.state.text}</div>
      <div><ProgressBar efficiency={this.state.efficiency}/></div>
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
      {presentable && presentable.length &&
        presentable.map((skill, i) => React.createElement(EfficiencyProgress, {"text":"Skill: "+skill["skill"]+" with efficiency: "+skill["avg"],"efficiency":skill["avg"]}))}
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
      <p>{this.state.presentableData}</p>
      </html>
    )
  };
};

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"username":""};
    this.setState({"username":props.username});
  }

  componentWillReceiveProps(props) {
    this.setState({"username":props.username});
  }

  logOut = () => {
    window.location.href = "/";
  }

  render () {
    return (
      <html>
      <div className="NavBar">
      <b><a>Welcome, {this.state.username}</a></b>
      <b><a><button onClick={this.logOut}>Log Out</button></a></b>
      </div>
      </html>
  )
  }
}

export class Body extends React.Component {

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
      <NavBar className="NavBar" username={this.state.username} />
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
        <div className="horizontalWidgetGap" />
        <div className="widgets-column">
          <EfficienciesWidget title="Best Max Schedule Efficiencies" data={this.state.scheduleEfficienciesMax} length={5} />
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
