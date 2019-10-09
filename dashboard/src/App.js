import React, { Component } from 'react';
import './App.css';
import { Link } from "react-scroll";
import $ from 'jquery';

export class Body extends Component {

///////////////////////////////////////////////////////////////////
// Initialisation function/////////////////////////////////////////
///////////////////////////////////////////////////////////////////

  constructor(props) {

    super(props);
    // Bind all the functions to the component

    // Setup all state variables for the body
    this.state = {
      username: window.user
    }

    //this.setState({signupmessage: window.signupmessage});
  }

  render() {
      return (
      <html>
      <h1 className="title"><b>Welcome, {this.state.username}</b></h1>
      <body className="Body">
      </body>

      <footer className="footer">
      <b>Alex Bainbridge 2019-2020 NEA</b>
      </footer>
      </html>
    );
  };
};
