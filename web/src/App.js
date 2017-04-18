import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import 'tachyons/css/tachyons.css'

import Home from './pages/home'
import Dashboard from './pages/dashboard'
import CreateGame from './pages/create-game'
import EditGame from './pages/edit-game'
import PlayerProfile from './pages/player-profile'
import ContactMe from './pages/contact'
import HowItWorks from './pages/how-it-works'
import GameView from './pages/game-view'
import { connect } from 'react-redux'

import {pathOr} from 'ramda'

const App = function (props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/editprofile" component={PlayerProfile}/>
        <Route path="/creategame" component={CreateGame}/>
        <Route exact path="/about/creator" component={ContactMe}/>
        <Route exact path="/about/versus" component={HowItWorks}/>
        <Route path="/about/game" component={GameView}/>
        <Route path="/edit/game" component={EditGame}/>



      </div>
    </BrowserRouter>
  )
}



const connector = connect(state => state)



export default connector(App)


// <Route className="" path="/" component={Component}/>
