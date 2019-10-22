import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

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
        if (data.length <= this.state.length) {
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
        presentable.map((skill, i) => React.createElement("div", {}, "Skill: "+skill["skill"]+" with efficiency: "+skill["avg"]))}
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
      <html>
      <span class="EfficiencyWidgetTitleBar">
        <b>{this.state.title}</b>
        <button onClick={this.increaseLength}>Up</button>
        <button onClick={this.decreaseLength}>Down</button>
      </span>
      <p>{this.state.presentableData}</p>
      </html>
    )
  };
};

export class Body extends Component {

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
      timeEfficienciesMin: {}
    }
    this.getUserData();

  }

  render() {
      return (
      <html>
      <h1 className="title"><b>Welcome, {this.state.username}</b></h1>
      <body className="Body">
      <EfficienciesWidget title="Best Max Time Efficiencies" data={this.state.timeEfficienciesMax} length={5} />
      <EfficienciesWidget title="Worst Min Time Efficiencies" data={this.state.timeEfficienciesMin} length={5} />
      </body>

      <footer className="footer">
      <b>Alex Bainbridge 2019-2020 NEA</b>
      </footer>
      </html>
    );
  };
};
