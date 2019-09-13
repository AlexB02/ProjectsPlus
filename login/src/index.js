import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App , NavBar , Body } from './App';

// place the app js file into the html document
ReactDOM.render(<NavBar />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Body />, document.getElementById('body'));
