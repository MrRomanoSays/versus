import React from 'react'
import { connect } from 'react-redux'
import { equals } from 'ramda'


import TextField from '../components/form-text-field'

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

import PickDay from '../components/grid5-2'
import DatePicker from '../components/date-picker'
import ShowDate from '../components/show-date'
import SetTime from '../components/time-picker'

import moment from 'moment'




import LocationList from '../components/location-list'

import PlayersAndSkill from '../components/players-and-skill'

import AdditionalInfo from '../components/additional-info'


const postGame = (game) => {
   return fetch(`http://localhost:8080/games`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(game)
  })
}


const CreateGame = function (props) {

  return (
    <div>
      {equals(props.view, 'step1') && (
        <View title="Pick Sport"
          headline="What would you like to play?"

          body={

            <PickSport

            setSport={props.setSport}
            sport={props.game.sport}

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
              props.reset()
              props.history.push('/dashboard')
            }}
            />}
          buttonRight={<ButtonForward
            onClick={e => props.next('step2')}
            />}
          >

        </View>
      )}

      {equals(props.view, 'step2') && (
        <View title="Pick Day and Time"
          headline="When would you like to play?"

          body={

            <ShowDate
              currentGameDate=
                {props.game.dateOfGame}

              currentGameTime=
                {moment(`${props.game.startTime}`, `HH:mm`).format(`h:mm a`)}

              cancellationDeadline=
                {moment(`${props.game.cancellationDeadline}`, `HH:mm`).format(`h:mm a`)}

              calendar=
                {<DatePicker
                handleChange={props.setGameDate}
                />}

              gameClockStart=
                {<SetTime
                  selectedTime={props.game.startTime}
                  onTimeChange={props.setGameTime}
                />}

              gameClockCancel=
                {<SetTime
                  selectedTime={props.game.cancellationDeadline}
                  onTimeChange={props.setCancellationDeadline}
                  colorPalette="dark"
                />}
              />
          }



          buttonLeft={<ButtonBack
            onClick={e => props.previous('step1')}
            />}
          buttonCenter={<Button
            buttonText="Cancel"
            onClick= {e => {
              props.reset()
              props.history.push('/dashboard')
            }}
            />}
          buttonRight={<ButtonForward
            onClick={e => props.next('step3')}
            />}


        >

        </View>
      )}

      {equals(props.view, 'step3') && (
        <View title="Pick Location"
          headline="Where would you like to play?"

          body={<LocationList
            allLocations={props.locations}
            setLocation={props.setLocation}
            location={props.location.name}
            gameLocation={props.game.gameLocation}
            game={props.game.sport}
            />}


          buttonLeft={<ButtonBack
            onClick={e => props.previous('step2')}
            />}
          buttonCenter={<Button
            buttonText="Cancel"
            onClick= {e => {
              props.reset()
              props.history.push('/dashboard')
            }}
            />}
          buttonRight={<ButtonForward
            onClick={e => props.next('step4')}
            />}


        >
        </View>
      )}


      {equals(props.view, 'step4') && (
        <View title="Your Competition"
          headline="What are your game parameters?"



          body={
            <PlayersAndSkill
              setSkillLevel={props.setSkillLevel}
              skillLevel={props.game.preferredSkillLevels}

              addMinPlayer={props.addMinPlayer}
              subtractMinPlayer={props.subtractMinPlayer}
              currentMinCount={props.game.minPlayers}
              currentMaxCount={props.game.maxPlayers}
              addMaxPlayer={props.addMaxPlayer}
              subtractMaxPlayer={props.subtractMaxPlayer}
              setMinPlayers={props.setMinPlayers}
              setMaxPlayers={props.setMaxPlayers}

            />}

          buttonLeft={<ButtonBack
            onClick={e => props.previous('step3')}
            />}
          buttonCenter={<Button
            buttonText="Cancel"
            onClick= {e => {
              props.reset()
              props.history.push('/dashboard')
            }}
            />}
          buttonRight={<ButtonForward
            onClick={e => props.next('step5')}
            />}
        >
        </View>
      )}



      {equals(props.view, 'step5') && (
        <View title="Additional Info"
          headline="Any other details?"

          body={<AdditionalInfo
              equipmentValue={props.game.equipmentInfo}
              equipmentHandleChange={e => props.setEquipment(e.target.value)}

              moreInfoValue={props.game.moreInfo}
              moreInfoHandleChange={e => props.setMoreInfo(e.target.value)}
            />}

          buttonLeft={<ButtonBack
            onClick={e => props.previous('step4')}
            />}
          buttonCenter={<Button
            buttonText="Cancel"
            onClick= {e => {
              props.reset()
              props.history.push('/dashboard')
            }}
            />}
            buttonRight={<ButtonForward
              buttonText="Create Game"
              onClick= {
                props.addGame(props.history, props.game)}
            />}


        >

        </View>
      )}










      {equals(props.view, 'stepFinal') && (
        <View title="Final Step"
          headline="Final Step"
          buttonLeft={<ButtonBack
            onClick= {e => props.previous('stepLast')}
          />}
          buttonCenter={<Button
            buttonText="Cancel"
            onClick= {e => {
              props.reset()
              props.history.push('/dashboard')
            }}
          />}
          buttonRight={<ButtonForward
            buttonText="Create Game"
            onClick= {e => {
              props.add(props.game)
              props.reset()
              props.history.push('/dashboard')
            }}
          />}
        >
          {/*
          <ViewPickSport
            ...with attributes...
          />
          */}
        </View>
      )}
    </div>
  )
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
    previous: (view) => dispatch({ type: "PREVIOUS", payload: view }),
    next: (view) => dispatch({ type: "NEXT", payload: view }),
    addGame: (history, game) => (e) => {
      postGame(game)
        .then(res => res.json())
        .then(res => {
          if (res.id) {
            dispatch({ type: "RESET" })
            dispatch({ type: "RESET_GAME" })
            history.push('/dashboard')
          } else {
            alert('Error saving to the database.')
          }
        })
        .catch(err => console.log(err.message))
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
