import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
  background-color: #b5bcff;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  padding: 10px;
  cursor: default;

  &:hover {
    box-shadow: 0 0 6px 1px #bebebe;
  }
`

const CreateProjectBox = styled.div`
  width: 54%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  cursor: default;
  border-color: #dbdbdb;
  border-width: medium;
  border-style: dashed;

  &:hover {
    border-style: solid;
  }
`

const CreateProjectButton = styled.button`
  border: none;
  width: -webkit-fill-available;
  padding: 10px;
  font-size: 2vh;

  &:hover {
    border: none;
  }

  &:focus {
    border: none;
    outline: none;
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
    return (
      <html class="widget">
        <EfficiencyTitleBar colour="#d3b5ff"><b>{this.props.title}</b></EfficiencyTitleBar>
        <p/>
        {this.state.projects && this.state.projects.length && this.state.projects.map((project,i) => <div><Project id={project["id"]} onClick={this.updatePage}>{project["title"]}</Project><p/></div>)}
        <CreateProjectBox><CreateProjectButton onClick={this.props.triggerCreateProject}>Create Project</CreateProjectButton></CreateProjectBox>
        <p/>
      </html>
    )
  }
}
