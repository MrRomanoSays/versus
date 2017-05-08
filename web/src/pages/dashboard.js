import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'


import NavBarLoggedIn from '../components/navigation-bar-loggedIn'
import ProfileQue from '../components/profile-que'
import LoggedOutQue from '../components/logged-out-que'

import GameList from '../components/game-list'


const getGame = (game, idToken) => {

  fetch(`http://localhost:8080/games/${game._id}`, {
     headers: {
       "Content-Type": "application/json",
       Authorization: 'Bearer ' + idToken
     },
     method: "GET"
   })
}


class Dashboard extends React.Component {
  componentDidMount () {

    !this.props.auth ?  this.props.lock.show()  :

      fetch(`http://localhost:8080/players/player_${this.props.player.user_id}`, {
         headers: {
           "Content-Type": "application/json",
           Authorization: 'Bearer ' + this.props.auth.idToken
         },
         method: "GET"
       })
       .then(res => res.json())

       .then(res => res._id ? this.props.setPlayerFromDatabase(res) : null )

       .catch(err => console.log(err))



        fetch('http://localhost:8080/games', {
          headers: {
            Authorization: 'Bearer ' + this.props.auth.idToken
          }
        })
        .then(res => res.json())
        .then(games => this.props.loadGames(games))
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

          !this.props.player._id ?

            <ProfileQue />
              :
              <div>
                <h4 className="bg-black-70 white-90 pa3 athelas f3 tc tl-ns">Welcome {this.props.player.firstName}!</h4>
                  <GameList
                    allGames={this.props.games}
                    game={this.props.game}
                    loadGameToState={ (game) => (e) => {
                      this.props.loadGame(this.props.history, game, this.props.idToken)
                    }}
                  />
              </div>
        }

        </div>

    )
  }
}


const MapActionsToProps = function (dispatch) {
  return {
    reset: () => {
      dispatch({ type: "RESET" })
      dispatch({ type: "RESET_GAME" })
    },
    resetGame: () => { dispatch({ type: "RESET_GAME" }) },

    setPlayerFromDatabase: (res) => { dispatch ({ type: "SET_PLAYER_FROM_DATABASE", payload: res })},

    loadGames: (games) => { dispatch ({ type: "LOAD_GAMES", payload: games })},

    loadGame: (history, game, idToken) => (e) => {

      getGame(game, idToken)
        .then(res => res.json())
        .then(res => {
          if (res.id) {
            dispatch({ type: "SET_GAME_FROM_DATABASE", payload: res })
          } else {
            alert('Error retrieving game from the database.')
          }
        })
    }
  }
}

const MapStateToProps = function (state) {
  return state
}

const connector = connect(MapStateToProps, MapActionsToProps)

export default connector(Dashboard)


// dispatch({ type: "RESET" })
// dispatch({ type: "RESET_GAME" })
// history.push('/dashboard')
