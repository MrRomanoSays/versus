import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

import { path, split } from 'ramda'

import NavBarLoggedIn from '../components/navigation-bar-loggedIn'
import LoggedOutQue from '../components/logged-out-que'

import GameCard from '../components/card-game'


class GameView extends React.Component {
  componentDidMount () {

    const gameIdFromURL = this.props.match.params.id
    const splitUrlString = split('_', gameIdFromURL)
    const gameCreatorId = `${splitUrlString[2]}_${splitUrlString[3]}`


    //GET to DB for game details

    fetch(`http://localhost:8080/games/${path(['match', 'params', 'id'], this.props)}`, {
     headers: {
       "Content-Type": "application/json",
       Authorization: 'Bearer ' + this.props.auth.idToken
     },
     method: "GET"
     })
     .then(res => res.json())
     .then(res => res ? this.props.dispatch({ type: "SET_GAME_FROM_DATABASE", payload: res }) : null )
     .catch(err => console.log(err))


     //GET to DB for game creator
     fetch(`http://localhost:8080/players/${gameCreatorId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + this.props.auth.idToken
      },
      method: "GET"
      })
      .then(res => res.json())
      .then(res => res ? this.props.dispatch({ type: "SET_GAME_CREATOR", payload: res }) : null )
      .catch(err => console.log(err))


     //GET to DB for all players that have joined this game (includes game creator)
     fetch(`http://localhost:8080/allGamesForEveryPlayer/${this.props.match.params.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + this.props.auth.idToken
      },
      method: "GET"
      })
      .then(res => res.json())
      .then(res => res ? this.props.dispatch({ type: "SET_GAME_CURRENT_ROSTER_FROM_DATABASE", payload: res }) : null )
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
            //this.props.dispatch({ type: "SET_GAME_CREATOR", payload: player })
            this.props.dispatch({ type: "SET_PREFERRED_CONTACT", payload: player.phone })
            this.props.dispatch({ type: "SET_CURRENT_PLAYER", payload: player })
          }}
        />

      {!this.props.auth ?

        <LoggedOutQue
          auth={(e) => {this.props.lock.show()}}
        />

      // If game's max players has not been reached, the game details are shown
      :

      this.props.game.currentPlayers.length < this.props.game.maxPlayers ?

        <GameCard
          game={this.props.game}
          player={this.props.player}
          auth={this.props.auth}
          history={this.props.history}
        />

      // If game's max players has been reached, the following message is displayed
      :

        <div>
          <h4 className="bg-dark-red white-90 pa3 athelas f3 tc tl-ns">Sorry.  The game below has reached its player max.</h4>
          <Link to="/dashboard" className="pl3 athelas">Click here to return to the Dashboard</Link>
          <GameCard />
        </div>

      }

    </div>
    )
  }
}


const connector = connect(state=>state)

export default connector(GameView)
