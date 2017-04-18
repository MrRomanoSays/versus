import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

import moment from 'moment'
import { head } from 'ramda'

import NavBarLoggedIn from '../components/navigation-bar-loggedIn'
import Header from '../components/header'
import ProfileQue from '../components/profile-que'

import GameList from '../components/game-list'
import LocationList from '../components/location-list'


class Dashboard extends React.Component {
  componentDidMount () {
    console.log("Dashboard loaded and fetched data")
    fetch(`http://localhost:8080/players/player_${this.props.user.user_id}`, {
     headers: {
       "Content-Type": "application/json",
       Authorization: 'Bearer ' + this.props.auth.idToken
     },
     method: "GET"
   })
   .then(res => res.json())

   .then(res => res._id ? this.props.dispatch({ type: "SET_PLAYER_FROM_DATABASE", payload: res }) : null )

   .catch(err => console.log(err))



    fetch('http://localhost:8080/games', {
      headers: {
        Authorization: 'Bearer ' + this.props.auth.idToken
      }
    })
    .then(res => res.json())
    .then(games => this.props.dispatch({ type: "LOAD_GAMES", payload: games}))
    .catch(err => console.log(err))
  }
  render () {
    return (

        <div>
          <NavBarLoggedIn
            auth={this.props.auth}
            userId={this.props.player._id}
            player={this.props.player}
            playerAvatar={this.props.user.picture}
            loadCreatorDetails={ (player) => (e) => {
              this.props.dispatch({ type: "SET_GAME_CREATOR", payload: player })
              this.props.dispatch({ type: "SET_PREFERRED_CONTACT", payload: player.phone })
              this.props.dispatch({ type: "SET_CURRENT_PLAYER", payload: player })
            }}
          />

        {!this.props.player._id ?

        <ProfileQue />
          :
          <div>
            <h4 className="bg-black-70 white-90 pa3 athelas f3 tc tl-ns">Welcome back {this.props.player.firstName}!</h4>
              <GameList
                allGames={this.props.games}
                game={this.props.game}
                loadGameToState={ (game) => (e) => this.props.dispatch({ type: "SET_GAME_ID_TO_STATE", payload: game._id })}

              />
          </div>
        }









        </div>

    )
  }
}



const connector = connect(state=>state)

export default connector(Dashboard)
