import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact  path="/about" component={About} />
        <Route exact  path="/projects" component={Project} />
        <Route exact  path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
