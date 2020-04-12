import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Home from './component/Home'
// import Room from './component/Room'
import Findpage from './component/Findpage'
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './component/Profile'
import Signin from './component/Signin'
import About from './component/About'

export default class App extends Component {
  state = {
    test: []
  }
  

  render() {
    return (
      // <Home/>
      <Router>
      <div className="container mt-4 mb-5">

        <Route exact path="/" render={ props => (
          <div>
          <Home />
          
          </div>
        )} />
         
         <Switch>
            <Route path="/Findpage">
              <Findpage />
            </Route>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Signin">
              <Signin />
            </Route>
            <Route path="/About">
              <About />
            </Route>
         </Switch>
         </div>
      </Router>
    )
  }
}


