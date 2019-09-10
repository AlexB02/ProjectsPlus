import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Projects Plus</h1>
        <p>Team management made simple.</p>

        <form method="POST">
        <label>
        Name:
        <input type="text" name="name" />
        Password:
        <input type="password" name="pass" />
        </label>
        <input type="submit" value="Submit" />
        </form>

        <p>{window.loginstatus}</p>

        </header>

    </div>
  );
}

export default App;
