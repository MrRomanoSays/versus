import React from 'react'
import { connect } from 'react-redux'
import { equals, set, lensProp, append  } from 'ramda'


import View from '../components/view'
import ButtonBack from '../components/button-back'
import Button from '../components/button'
import ButtonForward from '../components/button-forward'

import PickSport from '../components/grid4by2'
import baseball from '../images/icons/baseball.png'
import basketball from '../images/icons/basketball.png'
import soccer from '../images/icons/soccer.png'
import golf from '../images/icons/golf.png'
import hockey from '../images/icons/hockey.png'
import rugby from '../images/icons/rugby.png'
import tennis from '../images/icons/tennis.png'
import volleyball from '../images/icons/volleyball.png'

import DatePicker from '../components/date-picker'
import ShowDate from '../components/show-date'
import SetTime from '../components/time-picker'

import moment from 'moment'




import LocationList from '../components/location-list'

import PlayersAndSkill from '../components/players-and-skill'

import AdditionalInfo from '../components/additional-info'
import LoggedOutQue from '../components/logged-out-que'


const postGame = (game, idToken) => {
   return fetch(`http://localhost:8080/games`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + idToken
    },
    method: "POST",
    body: JSON.stringify(game)
  })
}

const updatePlayer = (player, idToken) => {
   return fetch(`http://localhost:8080/players/${player._id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + idToken
    },
    method: "PUT",
    body: JSON.stringify(player)
  })
}

const getUpdatedPlayer = (player, idToken) => {
   return fetch(`http://localhost:8080/players/${player._id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + idToken
    },
    method: "GET"
  })
}


class CreateGame extends React.Component {

  componentDidMount () {
    this.props.setGameCreator(this.props.player._id)
    this.props.setCurrentPlayer(this.props.player._id)
    this.props.setGameCreated(new Date().toISOString())
    this.props.setPreferredContact(this.props.player.phone)
  }
  render () {
    return (

      !this.props.auth ?

        <LoggedOutQue
          auth={(e) => {this.props.lock.show()}}
        />

        :

      <div>
        {equals(this.props.view, 'step1') && (
          <View title="Pick Sport"
            headline="What would you like to play?"

            body={

              <PickSport

              setSport={this.props.setSport}
              sport={this.props.game.sport}

              image1={volleyball}
              image1Description="Volleyball"

              image2={tennis}
              image2Description="Tennis"

              image3={golf}
              image3Description="Golf"

              image4={baseball}
              image4Description="Baseball"

              image5={rugby}
              image5Description="Rugby"

              image6={soccer}
              image6Description="Soccer"

              image7={basketball}
              image7Description="Basketball"

              image8={hockey}
              image8Description="Hockey"
            />}
            buttonCenter={<Button
              buttonText="Cancel"
              onClick= {e => {
                this.props.reset()
                this.props.resetGame()
                this.props.history.push('/dashboard')
              }}
              />}
            buttonRight={<ButtonForward
              onClick={e => this.props.next('step2')}
              />}
            >

          </View>
        )}

        {equals(this.props.view, 'step2') && (
          <View title="Pick Day and Time"
            headline="When would you like to play?"

            body={

              <ShowDate
                currentGameDate=
                  {this.props.game.dateOfGame}

                currentGameTime=
                  {moment(`${this.props.game.startTime}`, `HH:mm`).format(`h:mm a`)}

                cancellationDeadline=
                  {moment(`${this.props.game.cancellationDeadline}`, `HH:mm`).format(`h:mm a`)}

                calendar=
                  {<DatePicker
                  handleChange={this.props.setGameDate}
                  />}

                gameClockStart=
                  {<SetTime
                    selectedTime={this.props.game.startTime}
                    onTimeChange={this.props.setGameTime}
                  />}

                gameClockCancel=
                  {<SetTime
                    selectedTime={this.props.game.cancellationDeadline}
                    onTimeChange={this.props.setCancellationDeadline}
                    colorPalette="dark"
                  />}
                />
            }


            buttonLeft={<ButtonBack
              onClick={e => this.props.previous('step1')}
              />}
            buttonCenter={<Button
              buttonText="Cancel"
              onClick= {e => {
                this.props.reset()
                this.props.resetGame()
                this.props.history.push('/dashboard')
              }}
              />}
            buttonRight={<ButtonForward
              onClick={e => this.props.next('step3')}
              />}


          >

          </View>
        )}

        {equals(this.props.view, 'step3') && (
          <View title="Pick Location"
            headline="Where would you like to play?"

            body={<LocationList
              allLocations={this.props.locations}
              setLocation={this.props.setLocation}
              location={this.props.location.name}
              gameLocation={this.props.game.gameLocation}
              game={this.props.game.sport}
              />}


            buttonLeft={<ButtonBack
              onClick={e => this.props.previous('step2')}
              />}
            buttonCenter={<Button
              buttonText="Cancel"
              onClick= {e => {
                this.props.reset()
                this.props.resetGame()
                this.props.history.push('/dashboard')
              }}
              />}
            buttonRight={<ButtonForward
              onClick={e => this.props.next('step4')}
              />}


          >
          </View>
        )}


        {equals(this.props.view, 'step4') && (
          <View title="Your Competition"
            headline="What are your game parameters?"



            body={
              <PlayersAndSkill
                setSkillLevel={this.props.setSkillLevel}
                skillLevel={this.props.game.preferredSkillLevels}

                addMinPlayer={this.props.addMinPlayer}
                subtractMinPlayer={this.props.subtractMinPlayer}
                currentMinCount={this.props.game.minPlayers}
                currentMaxCount={this.props.game.maxPlayers}
                addMaxPlayer={this.props.addMaxPlayer}
                subtractMaxPlayer={this.props.subtractMaxPlayer}
                setMinPlayers={this.props.setMinPlayers}
                setMaxPlayers={this.props.setMaxPlayers}

              />}

            buttonLeft={<ButtonBack
              onClick={e => this.props.previous('step3')}
              />}
            buttonCenter={<Button
              buttonText="Cancel"
              onClick= {e => {
                this.props.reset()
                this.props.resetGame()
                this.props.history.push('/dashboard')
              }}
              />}
            buttonRight={<ButtonForward
              onClick={e => {
                this.props.next('step5')
                !this.props.game._rev ? this.props.setGameId(`game_${this.props.game.sport.toLowerCase()}_${this.props.player._id}_${this.props.game.created}`) : null
              }}
              />}
          >
          </View>
        )}



        {equals(this.props.view, 'step5') && (
          <View title="Additional Info"
            headline="Any other details?"

            body={<AdditionalInfo
                equipmentValue={this.props.game.equipmentInfo}
                equipmentHandleChange={e => this.props.setEquipment(e.target.value)}

                moreInfoValue={this.props.game.moreInfo}
                moreInfoHandleChange={e => this.props.setMoreInfo(e.target.value)}
              />}

            buttonLeft={<ButtonBack
              onClick={e => this.props.previous('step4')}
              />}
            buttonCenter={<Button
              buttonText="Cancel"
              onClick= {e => {
                this.props.reset()
                this.props.resetGame()
                this.props.history.push('/dashboard')
              }}
              />}
              buttonRight={<ButtonForward
                buttonText="Create Game"
                onClick= {
                  this.props.addGame(this.props.history, this.props.game, this.props.auth.idToken, this.props.player)
                }
              />}
          >

          </View>
        )}





      </div>






    )
}
}




const MapStateToProps = function (state) {
  return state
}

const MapActionsToProps = function (dispatch) {
  return {
    reset: () => {
      dispatch({ type: "RESET" })
      dispatch({ type: "RESET_GAME" })
    },
    resetGame: () => { dispatch({ type: "RESET_GAME" }) },

    setGameCreator: (playerId) => dispatch({ type: "SET_GAME_CREATOR", payload: playerId }),
    setPreferredContact: (playerPhoneNumber) => dispatch({ type: "SET_PREFERRED_CONTACT", payload: playerPhoneNumber }),
    setCurrentPlayer: (playerId) => dispatch({ type: "SET_BASIC_PLAYER_INFO", payload: playerId }),
    setGameCreated: (time) => dispatch({ type: "SET_GAME_CREATED", payload: time }),
    setGameId: (gameId) => dispatch({ type: "SET_GAME_ID", payload: gameId }),

    previous: (view) => dispatch({ type: "PREVIOUS", payload: view }),
    next: (view) => dispatch({ type: "NEXT", payload: view }),
    addGame: (history, game, idToken, player) => (e) => {
      postGame(game, idToken)
        .then(res => res.json())
        .then(res => {
          if (res.id) {
            const myGamesLens = lensProp('myGames')
            const playerGames = append(game._id, player.myGames)
            const playerWithUpdatedGame = set(myGamesLens, playerGames, player)
            updatePlayer(playerWithUpdatedGame, idToken)

            getUpdatedPlayer(player, idToken)

            dispatch({ type: "RESET" })
            dispatch({ type: "RESET_GAME" })
            history.push('/dashboard')

          } else {
            alert('Error saving game to the database.')
          }
        })
    },

    setSport: (sportName) => dispatch({ type: "SET_GAME_SPORT", payload: sportName }),
    setLocation: (locationName) => dispatch({ type: "SET_GAME_LOCATION", payload: locationName }),

    setGameDate: (date) => dispatch({ type: "SET_GAME_DATE", payload: moment(date).format() }),
    setGameTime: (time) => dispatch({ type: "SET_GAME_TIME", payload: time }),
    setCancellationDeadline: (time) => dispatch({ type: "SET_GAME_CANCELLATION_DEADLINE", payload: time }),

    setMinPlayers: (numberOfPlayers) => dispatch({ type: "SET_GAME_MIN_PLAYERS", payload: numberOfPlayers }),
    setMaxPlayers: (numberOfPlayers) => dispatch({ type: "SET_GAME_MAX_PLAYERS", payload: numberOfPlayers }),
    setSkillLevel: (skillLevel) => dispatch({ type: "SET_GAME_PREFERRED_SKILL_LEVELS", payload: skillLevel }),
    addMinPlayer: () => dispatch({ type: "MIN_PLAYERS_INCREMENT" }),
    subtractMinPlayer: () => dispatch({ type: "MIN_PLAYERS_DECREMENT" }),
    addMaxPlayer: () => dispatch({ type: "MAX_PLAYERS_INCREMENT" }),
    subtractMaxPlayer: () => dispatch({ type: "MAX_PLAYERS_DECREMENT" }),
    setEquipment: (equipmentInfo) => dispatch({ type: "SET_GAME_EQUIPMENT_INFO", payload: equipmentInfo }),
    setMoreInfo: (moreInfo) => dispatch({ type: "SET_GAME_MORE_INFO", payload: moreInfo })
  }
}

const connector = connect(MapStateToProps, MapActionsToProps)

export default connector(CreateGame)
