import React from 'react';
import './App.css';
import { Link } from "react-scroll";
import crown from "./img/crown.svg";

export function NavBar() {
  return (
    <html>
    <div className="NavBar">
    <b>
    <a href="/">Back to home</a>
    </b>
    </div>
    </html>
  );
};

export function App() {
  return (
    <html>
    <div className="App" id="home">
      <header className="App-header">
        <div className="space1"></div>
        <h1 className="title"><b>projects plus+</b></h1>
        <a className="strapline"><b>team management, made simple.</b></a>
      </header>
    </div>
    </html>
  );
};

export function Body() {
  return (
    <div className="horizontaldiv">
      <div className="signupsection">
      </div>

      <div className="loginsection">
      </div>
    </div>


    <footer className="footer">
    <b>Alex Bainbridge 2019-2020 NEA</b>
    </footer>
  )
}
