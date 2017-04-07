import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import 'tachyons/css/tachyons.css'

import Home from './pages/home'
import NavBar from './components/navigation-bar'
import Dashboard from './pages/dashboard'
import CreateGame from './pages/create-game'
import PlayerProfile from './pages/player-profile'
import ContactMe from './pages/contact'
import HowItWorks from './pages/how-it-works'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route path="/editprofile" component={PlayerProfile}/>
          <Route path="/creategame" component={CreateGame}/>
          <Route exact path="/about/creator" component={ContactMe}/>
          <Route exact path="/about/versus" component={HowItWorks}/>



        </div>
      </BrowserRouter>
    )
  }
}

export default App;


// <Route className="" path="/" component={Component}/>