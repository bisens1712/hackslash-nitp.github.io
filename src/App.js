import React from 'react';
import { Router } from "@reach/router";
import Home from './pages/Home.js';
import Events from './pages/Events.js';
import Hall from './pages/Hall.js';
import Articles from './pages/Home.js';
import Projects from './pages/Projects.js';
import NavBar from './components/Nav.js';
import About from './pages/About.js';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Home path="/" />
        <Events path="/events" />
        <Hall path="/hall" />
        <Articles path="/articles" />
        <Projects path="/projects" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
