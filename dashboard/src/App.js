import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import { EfficienciesWidget } from "./EfficienciesWidget.js";
import { ViewProjectsWidget } from "./ViewProjectsWidget.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"title":props.title || "title",
                  "items":props.items};
  }

  componentWillReceiveProps(props) {
    if (props.title) {
      this.setState({"title":props.title});
    }
    if (props.items) {
      this.setState({"items":props.items});
    }
  }

  selectChange = (event) => {

    for(var i = 0; i < this.props.items.length; i++) {

      if(this.props.items[i]["title"] === event.target.value) {
        this.props.triggerParentUpdate(event.target.value,this.props.items[i]["id"]);
        return;
      }

    }
    this.props.triggerParentUpdate(event.target.value,0);

  }

  render() {
    if (this.state.title === "Your Profile") {
      return (
        <html>
          <select id="ProjectViewDropdown" class="ProjectViewDropdown" onChange={this.selectChange}>
            <option value={"profile"}>{this.props.title}</option>
            {this.state.items && this.state.items.length && this.state.items.map((project,i) => <option value={project["title"]}>{project["title"]}</option>)}
          </select>
        </html>
      )
    }
    else {
      var projectid = this.props.projectid;
      for (var i = 0; i < this.props.items.length; i++) {
        if (this.props.items[i]["title"] === this.state.title) {
          this.props.items.splice(i,1);
        }
      }
      return (
        <html>
          <select id="ProjectViewDropdown" class="ProjectViewDropdown" onChange={this.selectChange}>
            <option value={this.state.title}>{this.state.title}</option>
            {this.state.items && this.state.items.length && this.state.items.map((project,i) => <option value={project["title"]}>{project["title"]}</option>)}
            <option value="profile">Your Profile</option>
          </select>
        </html>
      )
    }
  }

}

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username:"",page:"",projects:[]};
    this.setState({username:props.username});
    this.setState({page:props.page});
    this.setState({projects:props.projects});
  }

  componentWillReceiveProps(props) {
    this.setState({username:props.username});
    this.setState({page:props.page});
    if (props.projects) {
      this.setState({projects:props.projects});
    }
  }

  logOut = () => {
    window.location.href = "/";
  }

  render () {
    return (
      <html>
      <div className="NavBar">
        <b><a><button onClick={this.logOut}>Log Out</button></a></b>
        <b><a>Welcome, {this.state.username}</a></b>
        <a class="pageStateNavBar">Currently Viewing: <DropdownMenu title={this.state.page} items={this.props.projects} triggerParentUpdate={this.props.triggerParentUpdate} projectid={this.props.projectid}/>
        </a>
      </div>
      </html>
  )
  }
}

class ProfilePage extends React.Component {

///////////////////////////////////////////////////////////////////
// Initialisation function/////////////////////////////////////////
///////////////////////////////////////////////////////////////////

  getUserProfileData = () => {
    let _this = this;
    $(document).ready(function(){
      // Get user details
      var req = $.ajax({url: "/getuserprofile",
                        type:"POST",
                        data: {}
                      });
      try {
        req.done(function(data){
            _this.setState({username: data.username});
            _this.setState({projects: data.projects});
            _this.setState({timeEfficienciesMax: data.timeEfficienciesMax});
            _this.setState({timeEfficienciesMin: data.timeEfficienciesMin});
            return;
        })
      }
      catch (e) {
        console.log("Error");
      };
    })};

  constructor(props) {

    super(props);

    // Setup all state variables for the body
    this.state = {
      username: "",
      projects: [],
      timeEfficienciesMax: [],
      timeEfficienciesMin: []
    }
    this.getUserProfileData();
  }

  addEfficiency = () => {
    let _this = this;
    $(document).ready(function(){
      // add efficiency
      var req = $.ajax({url: "/addefficiency",
                        type:"POST",
                        data: {}
                      });
      try {
        req.done(function(data){});
      }
      catch (e) {};
    })
    window.location.reload();
  };

  render() {
    console.log("Profile page this.state.projects: "+JSON.stringify(this.state.projects));
      return (
      <html>
      <NavBar className="NavBar" username={this.state.username} projects={this.state.projects} page={"Your Profile"} triggerParentUpdate={this.props.triggerParentUpdate} projectid={0}/>
      <body className="Body">
      <button onClick={this.addEfficiency} />
      <div className="widgets">
        <div className="widgets-column">
          <EfficienciesWidget title="What you're good at" data={this.state.timeEfficienciesMax} length={7} />
          <div className="verticalWidgetGap"/>
          <EfficienciesWidget title="Gaps in your skills" data={this.state.timeEfficienciesMin} length={5} />
        </div>
        <div className="horizontalWidgetGap" />
        <div className="widgets-column">
          <ViewProjectsWidget title="Your projects" projects={this.state.projects}/>
          <div className="verticalWidgetGap"/>
          <EfficienciesWidget title="What you're good at" data={this.state.timeEfficienciesMax} length={9} />
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

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);

    // Setup all state variables for the body
    this.state = {
      username: "",
      projects: [],
      projectid: 0,
      title: ""
    }
    this.setState({projectid:props.projectid});
    this.getUserProjectData(props.projectid);
  }

  getUserProjectData = (projectid) => {
    let _this = this;
    $(document).ready(function(){
      // Get user details
      var req = $.ajax({url: "/getuserproject",
                        type: "POST" ,
                        data: JSON.stringify({projectid}),
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                      });

      try {
        req.done(function(data) {
          _this.setState({username: data.username});
          _this.setState({projects: data.projects});
          _this.setState({title: data.title});
        });
      }
      catch (e) {};
    });
  };

  render() {
    return (
      <NavBar className="NavBar" username={this.state.username} page={this.state.title} projects={this.state.projects} triggerParentUpdate={this.props.triggerParentUpdate} projectid={this.props.projectid}/>
    )
  }
}

export class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page:"",projectid:0}
    this.state.page = "profile";
  }

  updatePage = (page,projectid) => {
      this.setState({"page":page});
      this.state.projectid = projectid;
  }

  render() {
    if (this.state.page === "profile") {
      return (
        <ProfilePage triggerParentUpdate={this.updatePage}/>
      )
    }
    else {
      return (
        <ProjectPage projectid={this.state.projectid} triggerParentUpdate={this.updatePage}/>
      )
    }
  }
}
