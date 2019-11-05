import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';
import $ from 'jquery';
import uparrow from "./img/up-arrow.svg";
import downarrow from "./img/down-arrow.svg";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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

class EfficienciesWidget extends React.Component {

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
          <span class="EfficiencyWidgetTitleBar">
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
      return (
        <html>
          <select id="ProjectViewDropdown" class="ProjectViewDropdown" onChange={this.selectChange}>
            <option value={this.state.title}>{this.state.title}</option>
            {this.state.items && this.state.items.length && this.state.items.map((project,i) => <option value={project["title"]}>{project["title"]}</option>)}
            <option value="profile">Your profile</option>
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
      return (
      <html>
      <NavBar className="NavBar" username={this.state.username} projects={this.state.projects} page={"Your Profile"} triggerParentUpdate={this.props.triggerParentUpdate} projectid={0}/>
      <body className="Body">
      <button onClick={this.addEfficiency} />
      <div className="widgets">
        <div className="widgets-column">
          <EfficienciesWidget title="Your best skills - Time Left" data={this.state.timeEfficienciesMax} length={this.state.timeEfficienciesMax.length} />
          <div className="verticalWidgetGap"/>
          <EfficienciesWidget title="Your worst skills - Time Left" data={this.state.timeEfficienciesMin} length={5} />
        </div>
        <div className="horizontalWidgetGap" />
        <div className="widgets-column">
          <EfficienciesWidget title="Your worst skills - Time Right" data={this.state.timeEfficienciesMin} length={3} />
          <div className="verticalWidgetGap"/>
          <EfficienciesWidget title="Your best skills - Time Right" data={this.state.timeEfficienciesMax} length={9} />
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
