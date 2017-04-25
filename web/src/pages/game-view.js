import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

import moment from 'moment'

import { head } from 'ramda'

import NavBarLoggedIn from '../components/navigation-bar-loggedIn'
import LoggedOutQue from '../components/logged-out-que'

import Header from '../components/header'
import GameCard from '../components/card-game'


class GameView extends React.Component {
  componentDidMount () {

    fetch(`http://localhost:8080/games/${this.props.match.params.id}`, {
     headers: {
       "Content-Type": "application/json",
       Authorization: 'Bearer ' + this.props.auth.idToken
     },
     method: "GET"
   })
   .then(res => res.json())

   .then(res => res._id ? this.props.dispatch({ type: "SET_GAME_FROM_DATABASE", payload: res }) : null )

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

        {!this.props.auth ?

          <LoggedOutQue
            auth={(e) => {this.props.lock.show()}}
          />

          :


        this.props.game.currentPlayers.length < this.props.game.maxPlayers ?

            <GameCard
              game={this.props.game}
              player={this.props.player}
              
            />
          :
          <div>
            <h4 className="bg-black-70 white-90 pa3 athelas f3 tc tl-ns">So sorry, but the game shown below has reached the maximum number of players allowed.</h4>
            <Link to="/dashboard">Click here to return to the Dashboard</Link>
            <GameCard />

          </div>


        }

      </div>

      )
    }
}


const connector = connect(state=>state)

export default connector(GameView)
