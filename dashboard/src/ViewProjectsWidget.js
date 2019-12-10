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
  border-width: 2px;

  &:hover {
    box-shadow: 0 0 5px 0.5px #E2E2E2;
  }
`

const CreateProjectButton = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  padding: 10px;
  cursor: default;
  border-style: solid;
  border-color: #e2f2f2;
  border-width: 2px;

  &:hover {
    box-shadow: 0 0 5px 0.5px #E2E2E2;
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
        this.props.triggerParentUpdate(JSON.stringify(this.state.projects[index]["title"]),event.target.id);
      }
    }

  }

  render() {
    if (this.state.projects.length) {
      var projectColours = {};
      var colours = ["#daadad","#e6e573"];

      for (var project in this.state.projects) {
        projectColours[project] = colours[Math.round(Math.random())];
      }
      return (
        <html class="widget">
          <EfficiencyTitleBar colour="#A569BD"><b>{this.props.title}</b></EfficiencyTitleBar>
          <p/>
          {this.state.projects && this.state.projects.length && this.state.projects.map((project,i) => <div><Project id={project["id"]} onClick={this.updatePage} colour={projectColours[project["id"]-1]}>{project["title"]}</Project><p/></div>)}
          <CreateProjectButton onClick={this.props.triggerCreateProject}>Create a project</CreateProjectButton>
          <p/>
        </html>
      )
    }
    else {
      return (
        <html class="widget">
          <EfficiencyTitleBar colour="#a580b8"><b>{this.props.title}</b></EfficiencyTitleBar>
          <p/>
          You are not a member of any projects
          <p/>
            <CreateProjectButton onClick={this.props.triggerCreateProject}>Create Project</CreateProjectButton>
          <p/>
        </html>
      )
    }
  }
}
