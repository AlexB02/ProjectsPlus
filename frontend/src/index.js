import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App , NavBar , Body } from './App';

// place the app js file into the html document
ReactDOM.render(<NavBar />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Body />, document.getElementById('body'));

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var body = document.getElementById("body");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    body.classList.add("bodywithbar")
  } else {
    navbar.classList.remove("sticky");
    body.classList.remove("bodywithbar")
  }
}
