import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

import moment from 'moment'


import NavBarLoggedIn from '../components/navigation-bar-loggedIn'
import Header from '../components/header'

import GameCard from '../components/card-game'


class GameView extends React.Component {
  componentDidMount () {

    fetch(`http://localhost:8080/games/${this.props.game._id}`, {
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

          />

        {this.props.game.currentPlayers.length < this.props.game.maxPlayers ?
            <GameCard
              game={this.props.game}

              gameDate={this.props.game.dateOfGame}
              time={moment(`${this.props.game.startTime}`, `HH:mm`).format(`h:mm a`)}
              locationName={this.props.game.gameLocation.name}
              streetAddress={this.props.game.gameLocation.streetAddress}
              city={this.props.game.gameLocation.city}
              state={this.props.game.gameLocation.state}
              zipcode={this.props.game.gameLocation.zipcode}
              gameCreator={this.props.game.gameCreator}
              creatorContact={this.props.game.preferredContact}
              minPlayers={this.props.game.minPlayers}
              maxPlayers={this.props.game.maxPlayers}
              currentPlayers={this.props.game.currentPlayers}
              preferredSkillLevel={this.props.game.preferredSkillLevels}
              locationDescription={this.props.game.gameLocation.description}
              equipmentInfo={this.props.game.equipmentInfo}
              moreInfo={this.props.game.moreInfo}

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
