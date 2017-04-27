import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'font-awesome/css/font-awesome.css'

import { toString, filter, contains, toLower, head, toUpper, tail, pathOr, map, append, merge, without } from 'ramda'



const updateGame = (updatedGame, idToken) => {

   return fetch(`http://localhost:8080/games/${updatedGame._id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + idToken
    },
    method: "PUT",
    body: JSON.stringify(updatedGame)
  })
}

const updatePlayer = (updatedPlayer, idToken) => {
   return fetch(`http://localhost:8080/players/${updatedPlayer._id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + idToken
    },
    method: "PUT",
    body: JSON.stringify(updatedPlayer)
  })
}


const GameCard = function (props) {

  const basicPlayerInfo = {
    _id: props.player._id,
    picture: props.player.picture,
    shortName: `${props.player.firstName} ${head(props.player.lastName)}`,
    firstName: props.player.firstName,
    lastName: props.player.lastName
  }

  const updatedGameWithPlayer = merge(props.game, {currentPlayers: append(basicPlayerInfo, props.game.currentPlayers)})
  const updatedPlayer = merge(props.player, {myGames: append(props.game._id, props.player.myGames)})

  const updatedGameRemovingPlayer = merge(props.game, {currentPlayers: without([basicPlayerInfo], props.game.currentPlayers)})
  const updatedPlayerRemovingGame = merge(props.player, {myGames: without([props.game._id], props.player.myGames)})


  const mapFunctionForCurrentPlayers = function (player) {
    return (
        <div key={`${player._id}`} className="dib">
          <article className="fl mw4 mh4 center bg-white br3 pa2 ba b--black-10 hover-bg-gold hover-black">
            <div className="tc">
              <img src={player.picture ? player.picture : "http://lorempixel.com/400/200/people"} className="br-100 w3 h3 dib ba b--black-10 " title="Player Avatar if available or Random Sports Image" />
              <div className="athelas f6 fw3">{player.shortName}</div>
            </div>
          </article>
        </div>
    )
  }


  return (

    <article className="cf ph3 ph5-ns pv5">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <div className="f6 ttu tracked gray">{props.game.dateOfGame}</div>

        <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
          {props.game.sport} @ {moment(`${props.game.startTime}`, `HH:mm`).format(`h:mm a`)}
        </h1>

        <h2 className="f3 mid-gray lh-title">
          {props.game.gameLocation.name}
        </h2>

        <div className="f6 ttu tracked gray mb1 lh-copy ">{props.game.gameLocation.streetAddress}</div>
        <div className="f6 ttu tracked gray  lh-copy bb bw1 mb2 pb2">{props.game.gameLocation.city}, {props.game.gameLocation.state} {props.game.gameLocation.zipcode}</div>


        <div className="flex items-center pt2 pb2 bg-gold bt b--gray ">
         <span className="athelas lh-title ttu tracked fw1 ml3">Organizer:</span>
         <span className="avenir lh-title tracked fw4 ml3">{props.game.gameCreator.firstName + " " + head(`${props.game.gameCreator.lastName}.`)}</span>
        </div>

        <div className="flex items-center pt3 pb3 bg-gold b--gray bb ">
          <span className="athelas lh-title ttu tracked fw1 ml3">Contact:</span>
          <span className="avenir lh-title fw4 tracked ml3">{props.game.gameCreator.phone}</span>
        </div>

<div className="avenir ttu tracked">
        <div className="fl w-100 w-33-ns tc pv1 bg-black-05 bl bb br b--gold">
          <div className="pv2">
            <div className="f6 fw4">Min</div>
            <div className="f4 fw6">{props.game.minPlayers}</div>
          </div>
        </div>

        <div className="fl w-100 w-34-ns tc pv1 bg-black-05 bb b--gold">
          <div className="pv2">
            <div className="f6 fw4">Current</div>
            <div className="f4 fw6">
               {props.game.currentPlayers.length < props.game.minPlayers ? `Need ${props.game.minPlayers-props.game.currentPlayers.length}` : props.game.currentPlayers.length >= props.game.minPlayers && props.game.currentPlayers.length <= props.game.maxPlayers ? `${props.game.maxPlayers-props.game.currentPlayers.length} spots left` : props.game.currentPlayers.length === props.game.maxPlayers ? `Full` : null }
              </div>
          </div>
        </div>

        <div className="fl w-100 w-33-ns tc pv1 bg-black-05 bl bb br b--gold">
          <div className="pv2">
            <div className="f6 fw4">Max</div>
            <div className="f4 fw6">{props.game.maxPlayers}</div>
          </div>
        </div>



  {

    /* If the player is the game creator they will have access to share the game with a pre-formatted email */
    props.player._id === props.game.gameCreator._id ?

    <div className="mv1 mv0-ns fl w-100 tc">
        <a className="link" href={`mailto:?subject=${props.game.sport} on ${props.game.dateOfGame}?&body=Interested in a game of ${props.game.sport} at ${moment(props.game.startTime, `HH:mm`).format(`h:mm a`)} on ${props.game.dateOfGame}?  If we get enough players, we'll be at ${props.game.gameLocation.name}.  The address is ${props.game.gameLocation.streetAddress} ${props.game.gameLocation.city}, ${props.game.gameLocation.state} ${props.game.gameLocation.zipcode}. Log into your VS account and join before it reaches the player cap.`}>
          <div className="pointer white-90 dim pt1-ns mt1-ns  br2-ns f4 lh-title bg-black-80">EMAIL GAME DETAILS</div>
        </a>
    </div>

    :

    /* If player IS already listed as a current player show them Leave Game */

    contains(basicPlayerInfo, props.game.currentPlayers) ?

    <div>
      <div className="mv1 mv0-ns fl w-100 w-50-ns tc"
        onClick={e => {

                props.removePlayerFromGame(props.history, updatedGameRemovingPlayer, props.auth.idToken)
                props.removeGameFromPlayer(props.history, updatedPlayerRemovingGame, props.auth.idToken)

          }}
          >
          <div className="pointer hover-dark-red pt1-ns mt1-ns mr1-ns br2-ns f4 white-90 lh-title bg-black-80">LEAVE GAME</div>
      </div>


        <div className="mv1 mv0-ns fl w-100 w-50-ns tc ">
            <a className="link" href={`mailto:?subject=${props.game.sport} on ${props.game.dateOfGame}?&body=Interested in a game of ${props.game.sport} at ${moment(props.game.startTime, `HH:mm`).format(`h:mm a`)} on ${props.game.dateOfGame}?  If we get enough players, we'll be at ${props.game.gameLocation.name}.  The address is ${props.game.gameLocation.streetAddress} ${props.game.gameLocation.city}, ${props.game.gameLocation.state} ${props.game.gameLocation.zipcode}. Log into your VS account and join before it reaches the player cap.`}>
              <div className="pointer gold hover-yellow pt1-ns mt1-ns ml1-ns br2-ns f4 lh-title bg-black-80">SHARE GAME</div>
            </a>
        </div>
    </div>


    :

    /* If player is NOT listed as a current player show Join Game */

    <div className="mv1 mv0-ns fl w-100 tc"
      onClick={e => {
        if (!contains(basicPlayerInfo, props.game.currentPlayers)) {
            props.updateGameWithNewPlayer(props.history, updatedGameWithPlayer, props.auth.idToken, props.player)
            props.updatePlayerWithNewGame(updatedPlayer, props.game._id, props.auth.idToken)
        }
      }}
    >
        <div className="pointer white-90 hover-yellow pt1-ns mt1-ns br2-ns f4 lh-title bg-black-80">JOIN GAME</div>
    </div>

  }


  { /* Checking Created By Status */

    props.player._id === props.game.gameCreator._id &&

    <div>
      <div className="mv1 mv0-ns fl w-100 w-50-ns tc">
          <div className="pointer hover-dark-red pt1-ns mt1-ns mr1-ns br2-ns f4 white-90 lh-title bg-black-80">DELETE GAME</div>
      </div>

      <Link to="/edit/game" className="link">
        <div className="mv1 mv0-ns fl w-100 w-50-ns tc ">
            <div className="pointer gold hover-yellow pt1-ns mt1-ns ml1-ns br2-ns f4 lh-title bg-black-80">EDIT GAME</div>
        </div>
      </Link>
    </div>

  }


</div>

      <header className="avenir fw4 ttu tracked f5 lh-copy measure b">Current Roster:</header>
          <div>{map(mapFunctionForCurrentPlayers)(props.game.currentPlayers)}</div>

      </header>

      <div className="fn fl-ns w-50-ns">
        <header className="f5 lh-copy measure mt0-ns b">Preferred Skill Level(s):</header>
          <p className="f5 lh-copy measure mt0-ns">{props.game.preferredSkillLevels}</p>

        <header className="f5 lh-copy measure mt0-ns b">Location Description:</header>
          <p className="f5 lh-copy measure mt0-ns">{props.game.gameLocation.description}</p>

        <header className="f5 lh-copy measure mt0-ns b">Equipment:</header>
          <p className="f5 lh-copy measure mt0-ns">{props.game.equipmentInfo}</p>

        <header className="f5 lh-copy measure mt0-ns b">More Info:</header>
          <p className="f5 lh-copy measure mt0-ns">{props.game.moreInfo}</p>
      </div>

    </article>

  )
}



const MapStateToProps = function (state) {
  return state
}

const MapActionsToProps = function (dispatch) {
  return {
    updateGameWithNewPlayer: (history, updatedGameWithPlayer, idToken, player) => {
      const basicPlayerInfo = {
        _id: player._id,
        picture: player.picture,
        shortName: `${player.firstName} ${head(player.lastName)}`,
        firstName: player.firstName,
        lastName: player.lastName
      }

        updateGame(updatedGameWithPlayer, idToken)
        .then(res => res.json())
        .then(res => {
          if (res.id) {
            dispatch({ type: "SET_REV_OF_UPDATED_GAME", payload: res.rev})
            dispatch({ type: "SET_NEW_PLAYER", payload: basicPlayerInfo })
          } else {
            alert('Error saving your updated game to the database.')
          }
        }
        )
        .catch(err => console.log(err.message))
    },
    updatePlayerWithNewGame: (updatedPlayer, gameId, idToken) => {
      updatePlayer(updatedPlayer, idToken)
      .then(res => res.json())
      .then(res => {
        if (res.id) {
          console.log(res)
          dispatch({ type: "SET_REV_OF_UPDATED_PLAYER", payload: res.rev})

          dispatch({ type: "SET_GAME_TO_MY_GAMES", payload: gameId})
        } else {
          alert('Error updating your profile with this game.')
        }
      })
      .catch(err => console.log(err.message))
    },


    removePlayerFromGame: (history, updatedGameRemovingPlayer, idToken) => {
      updateGame(updatedGameRemovingPlayer, idToken)
        .then(res => res.json())
        .then(res => {
          if (res.id) {
            history.push('/dashboard')
          } else {
            alert('Error removing your player information from this game.')
          }
        })
        .catch(err => console.log(err.message))
      },


    removeGameFromPlayer: (history, updatedPlayerRemovingGame, idToken) => {
      updatePlayer(updatedPlayerRemovingGame, idToken)
        .then(res => res.json())
        .then(res => {
          if (res.id) {
            history.push('/dashboard')
          } else {
            alert('Error removing this game from your player profile.')
          }
        })
        .catch(err => console.log(err.message))
      }

  }
}





const connector = connect(MapStateToProps, MapActionsToProps)

export default connector(GameCard)


//TESTING MODEL
// <div className="mv1 mv0-ns fl w-100 w-50-ns tc">
//     <div className=" pointer  dim pt1-ns mt1-ns mr1-ns br2-ns f4 white-90 lh-title bg-black-80">LEAVE GAME</div>
// </div>
//
// <div className="mv1 mv0-ns fl w-100 w-50-ns tc ">
//     <div className=" pointer hover-bg-yellow hover-black pt1-ns mt1-ns ml1-ns br2-ns f4 white-90 lh-title bg-black-80">JOIN GAME</div>
// </div>




//EARLIER OPTIONS


    //
    // <div>
    //     <div className="mv1 mv0-ns fl w-100 w-50-ns tc">
    //         <div className=" pointer  dim pt1-ns mt1-ns mr1-ns br2-ns f4 white-90 lh-title bg-black-80">LEAVE GAME</div>
    //     </div>
    //
    //     <div className="mv1 mv0-ns fl w-100 w-50-ns tc ">
    //         <div className=" pointer hover-bg-yellow hover-black pt1-ns mt1-ns ml1-ns br2-ns f4 white-90 lh-title bg-black-80">JOIN GAME</div>
    //     </div>
    // </div>
    //
    //
    // :
    //
    // <div className="mv1 mv0-ns fl w-100 tc">
    //     <div className="pointer yellow pt1-ns mt1-ns mr1-ns br2-ns f4 lh-title bg-black-80">JOIN GAME</div>
    // </div>
    //






//SAVE FOR locationDescription
// <div className="mv1 mv0-ns fl w-100 tc">
//     <div className="pointer white-90 dim pt1-ns mt1-ns  br2-ns f4 lh-title bg-black-80">LEAVE GAME</div>
// </div>
//
// <div className="mv1 mv0-ns fl w-100 tc">
//     <a className="link" href={`mailto:?subject=${props.game.sport} on ${props.game.dateOfGame}?&body=Interested in a game of ${props.game.sport} at ${props.game.startTime} on ${props.game.dateOfGame}?  If we get enough players, we'll be at ${props.game.gameLocation.name}.  The address is ${props.game.gameLocation.streetAddress} ${props.game.gameLocation.city}, ${props.game.gameLocation.state} ${props.game.gameLocation.zipcode}. Log into your VS account and join before it reaches the player cap.`}>
//       <div className="pointer white-90 dim pt1-ns mt1-ns  br2-ns f4 lh-title bg-black-80">EMAIL GAME DETAILS</div>
//     </a>
// </div>
