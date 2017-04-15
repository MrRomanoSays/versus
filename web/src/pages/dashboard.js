import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

import photo from '../images/eager-runner.jpg'

import NavBarLoggedIn from '../components/navigation-bar-loggedIn'

import moment from 'moment'

import Header from '../components/header'
import GameList from '../components/game-list'
import LocationList from '../components/location-list'


class Dashboard extends React.Component {
  componentDidMount () {
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

          />

        {!this.props.player._id ?

          <div>





          <header className="bg-gold sans-serif">
            <div className="mw9 center pa4 pt5-ns ph7-l">
              <h2 className="f1 f-subheadline-m f-headline-l measure-narrow lh-title mv0">
                <span className="bg-black-90 lh-copy white pa4-l pa3 tracked-tight">{`Hey "Champ"`}</span>
              </h2>
              <h4 className="f3 fw1 georgia i">{`Before we go any further let's set up your player profile.`}</h4>
                <Link to="/editprofile" className="ba b--white link pa1 f6 ttu tracked black-80">{`Edit Profile Now`}</Link>
            </div>
          </header>







          </div>
          :
          <div>
            <h4>Welcome back {this.props.player.firstName}!</h4>
              <GameList
                allGames={this.props.games}
              />
          </div>
        }









        </div>

    )
  }
}



const connector = connect(state=>state)

export default connector(Dashboard)
