import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Joshua Hutchinson</h1>
        <h2 className="bio">Who am I?</h2>
        <p className="bio-info">My name is Joshua Hutchinson, and I am beginning my career as a Junior Full-Stack Web Developer. I am currently based out of the Atlanta, GA area. My skill set currently includes JavaScript, HTML, CSS, React.js/Redux, and jQuery. I have experience working with databases (primarily Mongo) and using them to create my own web based applications.</p>
        <button type="enter" className="project-button" value="projects">View my Work</button>
      </div>
    );
  }
}

export default App;
