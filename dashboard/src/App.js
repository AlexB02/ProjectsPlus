import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import { EfficienciesWidget } from "./EfficienciesWidget.js";
import { ViewProjectsWidget } from "./ViewProjectsWidget.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styled from 'styled-components';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"title":props.title || "title",
                  "items":props.items,
                  "projectid":0};
  }

  componentWillReceiveProps(props) {
    if (props.title) {
      this.setState({"title":props.title});
    }
    if (props.items) {
      this.setState({"items":props.items});
    }
    if (props.projectid) {
      this.setState({"projectid":props.projectid});
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
    else if (this.state.title !== "title") {
      if (this.props.items) {
        console.log("-----start-----");

        var projectid = this.props.projectid;
        console.log(JSON.stringify(this.props.items));
        console.log("Projectid: "+projectid);

        for (var i = 0; i < this.props.items.length; i++) {

          console.log("Item id: "+this.props.items[i]["id"]);

          console.log("Item: "+JSON.stringify(this.props.items[i]));

          if (this.props.items[i]["id"] == this.props.projectid) {

            console.log("Items id is projectid");
            this.props.items.splice(i,1);

          }
        }
        console.log("-----fin-----");
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
      else {
        return (
          <div>none</div>
        )
      }
    }
    else {
      return (
        <div>none</div>
      )
    }
  }

}

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username:"",page:"",projectid:0,projects:[]};
    this.setState({username:props.username});
    this.setState({page:props.page});
    if (props.projectid) {
      this.setState({projectid:props.projectid});
    }
    else {
      this.setState({projectid:0});
    }
    this.setState({projects:props.projects});
  }

  componentWillReceiveProps(props) {
    this.setState({username:props.username});
    this.setState({page:props.page});
    if (props.projects) {
      this.setState({projects:props.projects});
    }
    if (props.projectid) {
      this.setState({projectid:props.projectid});
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

const CreateProjectPopUp = styled.div`
  background-color: white;
  border-radius: 10px;
  visibility: ${props => props.visible};
  padding: 40px;
  width: 30vw;
  position: absolute;
  left: 50%;
  margin-left: -20vw;
  top: 50%;
  margin-top: -20vh;
  z-index: 999;
`

const PageMask = styled.button`
  visibility: ${props => props.visible};
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`

const DropDownSelect = styled.select`
  margin-left: auto;
  margin-right: auto;
  -webkit-appearance: none;
  width: 100%;
  padding: 10px;
  text-align: centre;
  text-align-last: center;

  &:focus {
    outline: none;
  }
`

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
      timeEfficienciesMin: [],
      CreateProjectPopUpVisibility: "hidden",
      cancelClickOff: "False"
    }
    this.setState({CreateProjectPopUpVisibility: "hidden"});
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

  createNewProject = () => {
    this.setState({CreateProjectPopUpVisibility: "visible"});
  };

  clickOffCreateProjectPopUp = () => {
    if (this.state.cancelClickOff === "False") {
      this.setState({CreateProjectPopUpVisibility: "hidden"});
    }
    else {
      this.state.cancelClickOff = "False";
    }
  }

  clickCreateProjectPopupCreateButton = () => {
    this.state.cancelClickOff = "True";
  }

  clickCreateProjectPopupCancelButton = () => {
    this.setState({CreateProjectPopUpVisibility: "hidden"});
  }

  submitNewProject = () => {
    var projecttitle = $("#projecttitle").val()
    var priceplan = $("#priceplan").val();

    if (projecttitle === "") {
      return;
    }
    if (priceplan === null) {
      return;
    }
    // Submission is Valid
    var project = {"title":projecttitle,"pricing":priceplan};
    let _this = this;
    $(document).ready(function(){
      var req = $.ajax({url: "/createproject",
                        type: "POST",
                        data: JSON.stringify(project),
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                      });

      try {
        req.done(function(data) {
          window.location.reload();
        });
      }
      catch (e) {};
    });
  }

  removeformsubmit(event) {
    if(event.preventDefault) {
      event.preventDefault();
    }
    else {
      event.returnValue = false;
    }
  };

  render() {
      return (
      <html>
      <NavBar className="NavBar" username={this.state.username} projects={this.state.projects} page={"Your Profile"} triggerParentUpdate={this.props.triggerParentUpdate} projectid={0}/>
      <body className="Body">
        <PageMask visible={this.state.CreateProjectPopUpVisibility} onClick={this.clickOffCreateProjectPopUp}>
          <CreateProjectPopUp visible={this.state.CreateProjectPopUpVisibility} onClick={this.clickCreateProjectPopupCreateButton}>
            <div style={{"display":"grid"}}>
              <div style={{"font-size":"2.5vh","padding-bottom":"3vh"}}><b>Create a new project</b></div>
              <div>
                <form style={{"display":"grid"}} onSubmit={this.removeformsubmit}>
                  <input type="text" className="boxinput" placeholder="project title" name="projecttitle" id="projecttitle" onInput={this.clickCreateProjectPopupCreateButton} required style={{"margin-left":"auto","margin-right":"auto","width":"100%","text-align":"center"}}/>
                  <p/>
                  <DropDownSelect id="priceplan" required>
                    <option value="" disabled selected>select price plan</option>
                    <option value="silver">silver</option>
                    <option value="gold">gold</option>
                    <option value="diamond">diamond</option>
                    <option value="platinum">platinum</option>
                  </DropDownSelect>
                  <p/>
                  <div style={{"display":"inline-flex","margin-left":"auto","margin-right":"auto"}}>
                    <input type="reset" value="Cancel" onClick={this.clickCreateProjectPopupCancelButton}/>
                    <div style={{"padding-left":"14vw"}}/>
                    <button onClick={this.submitNewProject}>Create</button>
                  </div>
                </form>
              </div>
            </div>
          </CreateProjectPopUp>
        </PageMask>
        <button onClick={this.addEfficiency} />
        <div className="widgets">
          <div className="widgets-column">
            <EfficienciesWidget title="Your best skills for meeting a deadline" data={this.state.timeEfficienciesMax} length={7} colour="#9de69a"/>
            <div className="verticalWidgetGap"/>
            <EfficienciesWidget title="Skills to improve when meeting a deadline" data={this.state.timeEfficienciesMin} length={5} colour="#ff6961"/>
          </div>
          <div className="horizontalWidgetGap" />
          <div className="widgets-column">
            <ViewProjectsWidget title="Your projects" projects={this.state.projects} triggerCreateProject={this.createNewProject} triggerParentUpdate={this.props.triggerParentUpdate}/>
            <div className="verticalWidgetGap"/>
            <EfficienciesWidget title="Skills to improve when meeting a deadline" data={this.state.timeEfficienciesMin} length={9} colour="#ff6961"/>
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
