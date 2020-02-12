import React, { Component } from 'react';
import styled from "styled-components";

const TitleBar = styled.span`
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
  text-align: center;
`

export class LatestManagersNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(props) {
    if (props.text) {
      this.setState({"text":props.text});
    }
  }

  render() {
    return (
      <html class="widget">
        <TitleBar colour="#008A38">Latest Managers Notes</TitleBar>
        <div style={{"text-align":"center","padding":"10px","font-size":"large"}}>
          <p/>
            {this.state.text}
          <p/>
        </div>
      </html>
    )
  }
}
