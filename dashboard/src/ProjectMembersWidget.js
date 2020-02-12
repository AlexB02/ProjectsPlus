import React, { Component } from 'react';
import styled from "styled-components";

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

export class ProjectMembersWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"members":[]};
  }

  componentWillReceiveProps(props) {
    if (typeof(props.members) == "object") {

      let members = props.members;
      var memberlist = [];

      for (let member in members) {
        memberlist.push(members[member][Object.keys(members[member])]);
      }

      this.setState({"members":memberlist});
    }
  }

  render() {
    if (this.state.members.length) {
      return (
        <html class="widget">
          <EfficiencyTitleBar colour="#FF476C">Members</EfficiencyTitleBar>
          <Gap />
          <table style={{"border-collapse":"collapse","font-size":"large"}}>
            {this.state.members.map((member,i) => <Member><td id={member[1]}>{member[0]}</td></Member>)}
            <AddMember><td>Add member +</td></AddMember>
          </table>
          <Gap />
        </html>
      )
    }
    else {
      return (
        <html class="widget">
          <EfficiencyTitleBar colour="#FF476C">Members</EfficiencyTitleBar>
          <p/>
          You currently do not have any assigned members
          <p/>
        </html>
      )
    }
  }
}
