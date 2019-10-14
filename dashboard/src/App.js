import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class EfficienciesWidget extends React.Component {

  dataToPresent = data => {
    var presentable = "";

    for (var skill in data) {
      presentable += "Skill: "+skill;
      for (var i = data[skill].length-1; (i > data[skill].length-6) && (i > -1); i--) {
        presentable += "\n" + data[skill][i].toString()+ "\n";
      }
    }
    return presentable;
  };

  constructor(props) {
    super(props);
    this.state = {"title":"","data":{},"presentableData":""};
    this.setState({"title":props.title});
    this.setState({"data":props.data});
    this.setState({"presentableData": this.dataToPresent(props.data)});
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props.value) {
      this.setState({"title":nextProps.title});
      this.setState({"data": nextProps.data});
      this.setState({"presentableData": this.dataToPresent(nextProps.data)});
    }
  }

  render() {
    return (
      <html>
      <p>{this.state.title}</p>
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
                        data: {}
                      });

      try {
        req.done(function(data) {
          _this.setState({username: data.username});
          _this.setState({efficiencies: data.efficiencies});
        });
      }
      catch (e) {};
    });
  };

  constructor(props) {

    super(props);
    // Bind all the functions to the component

    // Setup all state variables for the body
    this.state = {
      username: "",
      efficiencies: {}
    }
    this.getUserData();

  }

  render() {
      return (
      <html>
      <h1 className="title"><b>Welcome, {this.state.username}</b></h1>
      <body className="Body">
      <EfficienciesWidget title="efficiencies" data={this.state.efficiencies} />
      </body>

      <footer className="footer">
      <b>Alex Bainbridge 2019-2020 NEA</b>
      </footer>
      </html>
    );
  };
};
