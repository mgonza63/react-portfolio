import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Projects'

import './App.css'
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}
