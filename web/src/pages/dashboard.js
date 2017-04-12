import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'

import NavBar from '../components/navigation-bar'
import Header from '../components/header'
import GameList from '../components/game-list'
import LocationList from '../components/location-list'


const Dashboard = function (props) {
  return (
    <BrowserRouter>
      <div>
        <NavBar
          link1Title="Create Game"
          link1Url="/creategame"
          link2Title="Edit Profile"
          link2Url="/editprofile"
        />

        <GameList
          allGames={props.games}
        />

    

      </div>
    </BrowserRouter>
  )
}

const MapStateToProps = function (state) {
  return state
}

const connector = connect(MapStateToProps)

export default connector(Dashboard)
