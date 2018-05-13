import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="landing-page">
          <h1 className="title">Hutch's Homepage</h1>
          <AboutMe />
          <Contact />
          <Projects />
        </div>
        </div>
        );
      }
    }
    
    export default App;
