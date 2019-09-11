import React from 'react';
import logo from './logo.svg';
import './App.css';

export function App() {
  return (
    <div className="App" id="home">
      <header className="App-header">
        <h1 className="title"><b>projects plus.</b></h1>
        <p className="strapline"><b>team management, made simple.</b></p>

        {/*}
        <form method="POST">
        <label>
        Name:
        <input type="text" name="name" />
        Password:
        <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
        </form>

        <p>{window.loginstatus}</p>
        */}

        </header>
    </div>
  );
};

export function NavBar() {
  return (
    <div className="NavBar">
    <b>
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#pricing">pricing</a>
    <a href="#signup">sign up</a>
    </b>
    </div>
  );
};

export function Body() {
  return (
    <body className="body">
    <b>
    <div id="about">
      <a className="bodytitle">you are efficiency.</a>
      <p>Explore the data behind what makes your team work. Receive customised employee recommendations, that learns as you use the app.</p>
    </div>
    <div id="pricing">pricing</div>
    <div id="signup">signup</div>
    </b>
    </body>
  );
};
