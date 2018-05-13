import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="landing-page">
          <h1 className="title">Hutch's Homepage</h1>
          <ul className="bio-info">
            <li>Joshua Hutchinson </li>
            <li>jthutch94@gmail.com </li>
            <li><a href="https://github.com/JTHUTCH94">github.com/JTHUTCH</a></li>
            <li><a href=
            "https://www.linkedin.com/in/hutchinson-joshua">linkedin.com/in/hutchinson-joshua</a></li>
            <li> Sandy Springs, GA </li>
            </ul>
        </div>
        <div className="work">
          <ul className="work-list">
            <li>
              <label htmlFor="work-link">
              Full Stack Project: <a href="https://quirky-heisenberg-45af30.netlify.com/"> RPG Character Builder</a></label>
            </li>
          </ul>
        </div>
        </div>
        );
      }
    }
    
    export default App;
