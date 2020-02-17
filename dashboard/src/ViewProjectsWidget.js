import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
  background-color: white;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  padding: 10px;
  cursor: default;
  border-color: ${props => props.colour};
  border-style: solid;
  border-width: 0.5px;
  background-color: white;

  &:hover {
    background-color: rgb(247,247,247);
    cursor: pointer;
  }

  &:active {
    background-color: rgb(200,200,200);
  }
`

const CreateProjectButton = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  padding: 10px;
  cursor: default;
  border-width: 0.5px;
  border-style: solid;
  border-color: #e4e4e4;
  background-color: white;

  &:hover {
    background-color: rgb(247,247,247);
    cursor: pointer;
  }

  &:active {
    background-color: rgb(200,200,200);
  }
`

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

export class ViewProjectsWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"projects": []};
  }

  componentWillReceiveProps(props) {
    this.setState({"projects": props.projects});
  }

  updatePage = (event) => {

    for (var index in this.state.projects) {
      if (JSON.stringify(this.state.projects[index]["id"]) === event.target.id) {
        this.props.triggerParentUpdate(JSON.stringify(this.state.projects[index]["title"]),"project",event.target.id);
      }
    }

  }

  render() {
    try {
      if (this.state.projects.length) {
        return (
          <html class="widget">
            <EfficiencyTitleBar colour="#008080"><b>{this.props.title}</b></EfficiencyTitleBar>
            <p/>
            {this.state.projects && this.state.projects.length && this.state.projects.map((project,i) => <div><Project id={project["id"]} onClick={this.updatePage} colour={project["colour"]}>{project["title"]}</Project><p/></div>)}
            <CreateProjectButton onClick={this.props.triggerCreateProject}>Create a project</CreateProjectButton>
            <p/>
          </html>
        )
      }
    }
    catch {
        return (
          <html class="widget">
            <EfficiencyTitleBar colour="#008080"><b>{this.props.title}</b></EfficiencyTitleBar>
            <p/>
            You are not a member of any projects
            <p/>
              <CreateProjectButton onClick={this.props.triggerCreateProject}>Create Project</CreateProjectButton>
            <p/>
          </html>
      )
  }
}
