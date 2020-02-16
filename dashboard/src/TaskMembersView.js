import React, { Component } from 'react';
import styled from "styled-components";
import Popup from "reactjs-popup";
import $ from "jquery";
import Dropdown from 'react-dropdown';

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
  font-weight: bold;
`

const InviteMemberSubmitDiv = styled.div`
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
  width: 50%;
  margin-right: auto;
  margin-left: auto;

  &:hover {
    background-color: rgb(247,247,247);
  }

  &:active {
    background-color: rgb(200,200,200);
  }
`

const Member = styled.tr`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  cursor: default;
  background-color: white;
  transition: 0.1s;
  white-space: pre;
  font-weight: normal;
  line-height: 35px;

  &:hover {
    background-color: rgb(247,247,247);
    cursor: pointer;
  }

  &:active {
  }
`

const AddMember = styled.tr`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  cursor: default;
  background-color: white;
  transition: 0.1s;
  white-space: pre;
  font-weight: normal;
  line-height: 35px;
  color: #a2a2a2;
  text-align: center;

  &:hover {
    background-color: rgb(247,247,247);
    cursor: pointer;
  }
`

const Gap = styled.div`
  padding-bottom: 10px;
`

export class TaskMembersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"members":[],"taskid":0,"addMemberFailMessage":"","addMemberSuccessMessage":""};
    this.setState({taskid:props.taskid});
    this.getMembers();
  }

  componentWillReceiveProps(props) {
    if (props.taskid) {
      this.setState({taskid:props.taskid});
    }

    if (typeof(props.members) == "object") {

      let members = props.members;
      var memberlist = [];

      for (let member in members) {
        memberlist.push(members[member]);
      }

      this.setState({"members":memberlist});
    }
  }



  inviteMember = () => {
    var email = $("#memberEmail").val();

    var member = {"email":email,"taskid":this.state.taskid};
    let _this = this;
    $(document).ready(function(){
      var req = $.ajax({url: "/addmembertotask",
                        type: "POST",
                        data: JSON.stringify(member),
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                      });

      try {
        req.done(function(data) {
          try {
            if (data.isMember == "False") {
              _this.setState({addMemberFailMessage:"Unable to add member"});
              _this.setState({addMemberSuccessMessage:""});
            }
            else {
              _this.setState({addMemberFailMessage:""});
              _this.setState({addMemberSuccessMessage:"Added member"});
              _this.getMembers();
            }
          }
          catch (e) {
            console.log("Error setting message");
            console.log(e);
          }
        });
      }
      catch (e) {

      }});

  };

  getMembers = () => {

    var id = {"taskid":this.props.taskid};
    let _this = this;
    $(document).ready(function(){
      var req = $.ajax({url: "/gettaskdata",
                        type: "POST",
                        data: JSON.stringify(id),
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                      });

      try {
        req.done(function(data) {
          try {
            var members = [];
            var colour = "";
            var dropdown = "";
            for (let member in data.members) {
              if (data.members[member][2] == "in progress") {
                colour = "green";
                dropdown = "issue";
                members.push([data.members[member][1],data.members[member][2],colour,[{"value":data.members[member][0],"label":dropdown}]]);
              }
              else {
                colour = "red";
                dropdown = "in progress";
                members.push([data.members[member][1],data.members[member][2],colour,[{"value":data.members[member][0],"label":dropdown}]]);
              }
            }
            _this.setState({members:members});
          }
          catch (e) {
            console.log(e);
          }
        });
      }
      catch (e) {

      }});

};

  changeMemberTaskStatus = (event) => {
    console.log("Member "+event.value+" changing to "+event.label);
    var id = {"memberid":event.value};
    var newStatus = {"memberid":event.label};

    let _this = this;
    $(document).ready(function(){
      var req = $.ajax({url: "/updatemembertaskstatus",
                        type: "POST",
                        data: JSON.stringify({"id":id,"taskid":_this.props.taskid,"newStatus":newStatus}),
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                      });

      try {
        req.done(function(data) {
          try {
            _this.getMembers();
          }
          catch (e) {
            console.log(e);
          }
        });
      }
      catch (e) {

      }});
  }

  render() {
    if (this.state.members.length) {
      return (
        <html class="widget" style={{"width":"40vw"}}>

          <EfficiencyTitleBar colour="#FF476C">Task Members</EfficiencyTitleBar>
          <div>
            <Gap />
            <table style={{"border-collapse":"collapse","font-size":"large","margin-left":"auto","margin-right":"auto","width":"40vw"}}>
              <tr>
                <th>Member</th>
                <th>Status</th>
              </tr>
              {this.state.members.map((member,i) => <Member style={{"color":member[2]}}><td>{member[0]}</td><td><Dropdown options={member[3]} onChange={this.changeMemberTaskStatus} value={member[1]} placeholder="Select an option" /></td></Member>)}
            </table>
            <table style={{"border-collapse":"collapse","font-size":"large","margin-left":"auto","margin-right":"auto","width":"40vw"}}>
              <AddMember><td><Popup trigger={<div>Add member +</div>} position="right center" modal style={{"border-radius":"10px"}}>
              <div style={{"color":"black","padding":"5vmin"}}>
                <div>Add member to project</div>
                <input id="memberEmail" type="text" class="boxinput" placeholder="email" required style={{"text-align":"center"}}/>
                <p />
                <InviteMemberSubmitDiv onClick={this.inviteMember}>Invite</InviteMemberSubmitDiv>
                <div style={{"color":"red"}}>{this.state.addMemberFailMessage}</div>
                <div style={{"color":"green"}}>{this.state.addMemberSuccessMessage}</div>
              </div>
              </Popup></td></AddMember>
            </table>
            <Gap />
          </div>
        </html>
      )
    }
    else {
      return (
        <html class="widget" style={{"width":"40vw"}}>
          <EfficiencyTitleBar colour="#FF476C">Task Members</EfficiencyTitleBar>
          <div>
            <p/>
            You currently do not have any assigned members
            <table style={{"border-collapse":"collapse","font-size":"large","margin-left":"auto","margin-right":"auto","width":"40vw"}}>
              <AddMember><td><Popup trigger={<div>Add member +</div>} position="right center" modal style={{"border-radius":"10px"}}>
              <div style={{"color":"black","padding":"5vmin"}}>
                <div>Add member to project</div>
                <input id="memberEmail" type="text" class="boxinput" placeholder="email" required style={{"text-align":"center"}}/>
                <p />
                <InviteMemberSubmitDiv onClick={this.inviteMember}>Invite</InviteMemberSubmitDiv>
                <div style={{"color":"red"}}>{this.state.addMemberFailMessage}</div>
                <div style={{"color":"green"}}>{this.state.addMemberSuccessMessage}</div>
              </div>
              </Popup></td></AddMember>
            </table>
            <p/>
          </div>
        </html>
      )
    }
  }
}
