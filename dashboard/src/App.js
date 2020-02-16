import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import { EfficienciesWidget } from "./EfficienciesWidget.js";
import { ViewProjectsWidget } from "./ViewProjectsWidget.js";
import { ViewTasksWidget } from "./ViewTasksWidget.js";
import { ProjectViewTasksWidget } from "./ProjectViewTasksWidget.js";
import { ProjectStatisticsWidget } from "./ProjectStatisticsWidget.js";
import { ProjectOverview } from "./ProjectOverview.js";
import { TaskOverview } from "./TaskOverview.js";
import { TaskMembersView } from "./TaskMembersView.js";
import { LatestManagersNotes } from "./LatestManagersNotes.js";
import { ProjectMembersWidget } from "./ProjectMembersWidget.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import backarrow from "./img/back-arrow.svg";
import styled from 'styled-components';

const NavBarDiv = styled.div`
  z-index: 4;
  height: calc(50px + 1vmin);
  border-bottom: ${props => props.colour} solid 3px;
  position: fixed;
  width: 100%;
`

const LogOutButtonWrapper = styled.div`
  cursor: pointer;
  border-radius: 6px;
  padding: 5px;
  font-size: 2vh;
  position: relative;
  bottom: 5px;
  border-width: 0.5px;
  border-style: solid;
  border-color: #e4e4e4;
  background-color: white;
  padding: 7px 18px;

  &:hover {
    background-color: rgb(247,247,247);
  }

  &:active {
    background-color: rgb(200,200,200);
  }
`

const TextHoverUnderline = styled.div`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username:"",lastname:"",page:"",projectid:0,projects:[]};
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
    this.setState({lastname:props.lastname});
    this.setState({page:props.page});
    if (props.projects) {
      this.setState({projects:props.projects});
    }
    if (props.projectid) {
      this.setState({projectid:props.projectid});
    }
    // Will receive next if a task redirection
    if (props.task) {
        this.setState({task:props.task});
    }
    if (props.projectname) {
        this.setState({projectname:props.projectname});
    }
  }

  logOut = () => {
    window.location.href = "/";
  }

  toProfile = () => {
    this.props.triggerParentUpdate("profile","profile",0);
    return;
  }

  toProject = () => {
    this.props.triggerParentUpdate(this.state.projectname,"project",this.state.projectid);
    return;
  }

  render () {
    if (this.state.task == "true") {
      return (
        <html>
          <NavBarDiv colour={this.props.colour}>
            <div class="NavBar">
              <div>
                <img class="arrowsvgvert" src={backarrow} onClick={this.toProject} title="Back to profile" style={{"padding-left":"4vw","padding-top":"calc(18px + 1vh)"}}/>
                <a class="pageStateNavBar" style={{"float":"left"}}><TextHoverUnderline onClick={this.toProfile}>{this.state.username} {this.state.lastname}</TextHoverUnderline> / <TextHoverUnderline onClick={this.toProject}>{this.state.projectname}</TextHoverUnderline> / <b>{this.state.page}</b></a>
              </div>
              <div>
                <a><LogOutButtonWrapper onClick={this.logOut} style={{"margin-right":"4vw"}}>Log Out</LogOutButtonWrapper></a>
              </div>
            </div>
          </NavBarDiv>
        </html>
      )
    }
    if (this.state.page === (this.state.username + "'s Dashboard")) {
      return (
        <html>
          <NavBarDiv colour={this.props.colour}>
            <div class="NavBar">
              <div>
                <a class="pageStateNavBar" style={{"float":"left","margin-left":"4vw"}}>{this.state.page}</a>
              </div>
              <div>
                <a><LogOutButtonWrapper onClick={this.logOut} style={{"margin-right":"4vw"}}>Log Out</LogOutButtonWrapper></a>
              </div>
            </div>
          </NavBarDiv>
        </html>
      )
    }
    else {
      return (
        <html>
          <NavBarDiv colour={this.props.colour}>
            <div class="NavBar">
              <div>
                <img class="arrowsvgvert" src={backarrow} onClick={this.toProfile} title="Back to profile" style={{"padding-left":"4vw","padding-top":"calc(18px + 1vh)"}}/>
                <a class="pageStateNavBar" style={{"float":"left"}}><TextHoverUnderline onClick={this.toProfile}>{this.state.username} {this.state.lastname}</TextHoverUnderline> / <b>{this.state.page}</b></a>
              </div>
              <div>
                <a><LogOutButtonWrapper onClick={this.logOut} style={{"margin-right":"4vw"}}>Log Out</LogOutButtonWrapper></a>
              </div>
            </div>
          </NavBarDiv>
        </html>
      )
    }
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
            _this.setState({tasks: data.tasks});
            _this.setState({recenttasks: data.recenttasks});
            return;
        })
      }
      catch (e) {
        console.log("Error");
      };
    })
  };

  constructor(props) {

    super(props);

    // Setup all state variables for the body
    this.state = {
      username: "",
      projects: [],
      tasks: "",
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
    var description = $("#description").val()
    var colour = $("#projectcolour").val();

    if (projecttitle === "") {
      return;
    }
    if (description === "") {
      return;
    }
    if (projecttitle.length > 25) {
      window.alert("Project titles must be less than 25 characters");
      return;
    }
    if (colour === null) {
      return;
    }
    // Submission is Valid
    var project = {"title":projecttitle,"colour":colour,"description":description};
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
      <NavBar className="NavBar" username={this.state.username} lastname="" projects={this.state.projects} page={this.state.username + "'s Dashboard"} triggerParentUpdate={this.props.triggerParentUpdate} projectid={0} colour="crimson"/>
      <body className="Body">


        <PageMask visible={this.state.CreateProjectPopUpVisibility} onClick={this.clickOffCreateProjectPopUp}>
          <CreateProjectPopUp visible={this.state.CreateProjectPopUpVisibility} onClick={this.clickCreateProjectPopupCreateButton}>
            <div style={{"display":"grid"}}>
              <div style={{"font-size":"2.5vh","padding-bottom":"3vh"}}><b>Create a new project</b></div>
              <div>
                <form style={{"display":"grid"}} onSubmit={this.removeformsubmit}>

                  <input type="text" className="boxinput" placeholder="project title" name="projecttitle" id="projecttitle" onInput={this.clickCreateProjectPopupCreateButton} required style={{"margin-left":"auto","margin-right":"auto","width":"100%","text-align":"center"}}/>

                  <p/>

                  <input type="text" className="boxinput" placeholder="description" name="description" id="description" onInput={this.clickCreateProjectPopupCreateButton} required style={{"margin-left":"auto","margin-right":"auto","width":"100%","text-align":"center"}}/>

                  <p/>

                  <input type="color" style={{"margin-left":"auto","margin-right":"auto","border-style":"none"}} id="projectcolour" onInput={this.clickCreateProjectPopupCreateButton} required/>

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

        <div style={{"display":"inline-flex","width":"100%"}}>
          <div style={{"padding-top":"calc(47px + 1vmin)","width":"max-content"}}>
            {/*Potential placement of view projects widget as a side bar*/}
          </div>
          <div className="widgets">
          <div className="horizontalWidgetGap" />
          <div className="widgets-column">
            <ViewTasksWidget tasks={this.state.tasks} triggerParentUpdate={this.props.triggerParentUpdate}/>
            {/*<button onClick={this.addEfficiency} />*/}
            <div className="verticalWidgetGap"/>
          </div>
          <div className="horizontalWidgetGap" />
          <div className="widgets-column">
            <EfficienciesWidget title="Recently completed tasks" data={this.state.recenttasks} colour="#C0392B"/>
            <div className="verticalWidgetGap"/>
          </div>
          <div className="horizontalWidgetGap" />
          <div className="widgets-column">
            <ViewProjectsWidget title="Your projects" projects={this.state.projects} triggerCreateProject={this.createNewProject} triggerParentUpdate={this.props.triggerParentUpdate}/>
          </div>
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

// ################################# Project page #################################

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);

    // Setup all state variables for the body
    this.state = {
      username: "",
      lastname: "",
      projects: [],
      projectid: 0,
      title: "",
      tasks: []
    }
    this.setState({projectid:props.projectid});
    this.getProjectData(props.projectid);
  }


  reloadPage = () => {
    this.getProjectData(this.props.projectid);
  }


  getProjectData = (projectid) => {
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
          _this.setState({lastname: data.lastname});
          _this.setState({title: data.title});
          _this.setState({colour: data.colour});
          _this.setState({description: data.description});

          var tasks = data.tasks;
          var complete = 0;

          for (var task in tasks) {
            if (tasks[task][Object.keys(tasks[task])][2] == "True") {
              complete += 1;
            }
          }

          _this.setState({tasksnumber:tasks.length});
          _this.setState({completetasksnumber:complete});
          _this.setState({tasks: tasks});
          _this.setState({members: data.members});
          _this.setState({projectEfficiency: data.projectEfficiency})

        });
      }
      catch (e) {
        console.log(e);
      };
    });
  };

  render() {
    var tasks = this.state.tasks;
    return (
      <html>
        <NavBar className="NavBar" username={this.state.username} lastname={this.state.lastname} page={this.state.title} triggerParentUpdate={this.props.triggerParentUpdate} projectid={this.props.projectid} colour={this.state.colour}/>
        <div class="widgets">

          <div className="horizontalWidgetGap"/>
          <div class="widgets-column" style={{"width":"66vw"}}>
            <div style={{"display":"flex"}}>
              <ProjectOverview text={this.state.description}/>
              {/*<LatestManagersNotes text="These are the latest managers notes but if theres more text here then the box will get alrger. Or will the text get larger? not sure tbh, theres loads here not mate ngl, so do you reckon itll get even bigger or what?"/>*/}
            </div>
            <div class="verticalWidgetGap" />
            <ProjectViewTasksWidget tasks={tasks} projectid={this.props.projectid} triggerParentUpdate={this.props.triggerParentUpdate} reloadPage={this.reloadPage}/>
            <div class="verticalWidgetGap" />
            {/* Requires number of tasks complete and number of tasks*/}
            <ProjectStatisticsWidget tasksnumber={this.state.tasksnumber} completetasksnumber={this.state.completetasksnumber} projectEfficiency={this.state.projectEfficiency}/>
          </div>
          <div className="horizontalWidgetGap" />
          <div class="widgets-column" style={{"width":"20vw"}}>
            <ProjectMembersWidget members={this.state.members} reloadPage={this.reloadPage} projectid={this.props.projectid} triggerParentUpdate={this.props.triggerParentUpdate}/>
          </div>
        </div>
        <div style={{"padding-bottom":"5vh"}} />
      </html>
    )
  }
}

class TaskPage extends React.Component {

  constructor(props) {
    super(props);

    // Setup all state variables for the body
    this.state = {};
    this.getTaskData(props.taskid);
  }

  getTaskData = (taskid) => {
    let _this = this;
    $(document).ready(function(){
      // Get user details
      var req = $.ajax({url: "/getusertask",
                        type: "POST" ,
                        data: JSON.stringify({taskid}),
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                      });

      try {
        req.done(function(data) {
          // NavBar
          _this.setState({username: data.username});
          _this.setState({lastname: data.lastname});
          _this.setState({project: data.project});
          _this.setState({projectid: data.projectid});
          _this.setState({taskname: data.taskname});
          _this.setState({colour: data.colour});

          // Body
          _this.setState({description: data.description});
        });
      }
      catch (e) {};
    });
  };

  reloadPage = () => {
    this.getTaskData(this.props.taskid);
  }

  render() {
    return (
      <html>
        <NavBar className="NavBar" username={this.state.username} lastname={this.state.lastname} projectname={this.state.project} projectid={this.state.projectid} page={this.state.taskname} task="true" triggerParentUpdate={this.props.triggerParentUpdate} colour={this.state.colour}/>
        <div class="widgets">
          <div className="horizontalWidgetGap"/>
          <TaskOverview text={this.state.description} />
          <div class="horizontalWidgetGap" />
          <TaskMembersView taskid={this.props.taskid} reloadPage={this.reloadPage}/>
          <div class="horizontalWidgetGap" />
        </div>
      </html>
    )
  }
}

export class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page:"",projectid:0}
    this.state.page = "profile";
  }

  updatePage = (page,taskorproject,id) => {
    if (taskorproject == "project") {
      this.setState({"page":["project",page]});
      this.state.projectid = id;
    }
    else if (taskorproject == "task") {
      this.setState({"page":["task",page]});
      this.state.taskid = id;
    }
    else {
      this.setState({"page":["profile",page]});
    }
  }

  render() {
    if (this.state.page[0] === "project") {
      return (
        <ProjectPage projectid={this.state.projectid} triggerParentUpdate={this.updatePage}/>
      )
    }
    else if (this.state.page[0] === "task") {
      return (
        <TaskPage taskid={this.state.taskid} triggerParentUpdate={this.updatePage}/>
      )
    }
    else {
      return (
        <ProfilePage triggerParentUpdate={this.updatePage}/>
      )
    }
  }
}
