import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
  background-color: #80b3ff;
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

export class ViewProjectsWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"projects": []};
  }

  componentWillReceiveProps(props) {
    this.setState({"projects": props.projects});
  }

  render() {
    return (
      <html class="widget">
        <div><b>{this.props.title}</b></div>
        <p/>
        {this.state.projects && this.state.projects.length && this.state.projects.map((project,i) => <div><Project>{project["title"]}</Project><p/></div>)}
        <CreateProjectBox><CreateProjectButton onClick={this.props.triggerParentUpdate}>Create Project</CreateProjectButton></CreateProjectBox>
      </html>
    )
  }
}
