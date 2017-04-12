import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'


import NavBar from '../components/navigation-bar'
import Header from '../components/header'
import GameList from '../components/game-list'
import LocationList from '../components/location-list'


class Dashboard extends React.Component {
  componentDidMount () {
    fetch('http://localhost:8080/games')
    .then(res => res.json())
    .then(games => this.props.dispatch({ type: "LOAD_GAMES", payload: games}))
  }
  render () {
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
            allGames={this.props.games}
          />



        </div>
      </BrowserRouter>
    )
  }
}


const MapStateToProps = function (state) {
  return state
}

const connector = connect(MapStateToProps)

export default connector(Dashboard)
