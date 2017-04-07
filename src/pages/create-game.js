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

import LocationList from '../components/location-list'

import PlayersAndSkill from '../components/grid-mixed'

const CreateGame = function (props) {
  return (
    <div>
      {equals(props.view, 'step1') && (
        <View title="Pick Sport"
          headline="Pick A Sport"

          body={<PickSport
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
          headline="Pick Day and Time"

          body="React Time Picker Goes Here"

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
          headline="Pick Your Location"

          body={<LocationList
            allLocations={props.locations}
            setLocation={props.setLocation}
            location={props.location.name}
            gameLocation={props.game.gameLocation}
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
          headline="Your Competition"

          body={<PlayersAndSkill
            setMinPlayers={props.setMinPlayers}
            minPlayers={props.game.minPlayers}

            setMaxPlayers={props.setMaxPlayers}
            maxPlayers={props.game.maxPlayers}

            setSkillLevel={props.setSkillLevel}
            skillLevel={props.game.preferredSkillLevels}
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
    previous: view => dispatch({ type: "PREVIOUS", payload: view }),
    next: view => dispatch({ type: "NEXT", payload: view }),
    add: game => dispatch({ type: "ADD", payload: game }),
    setSport: sportName => dispatch({ type: "SET_GAME_SPORT", payload: sportName }),
    setLocation: locationName => dispatch({ type: "SET_GAME_LOCATION", payload: locationName }),
    setMinPlayers: numberOfPlayers => dispatch({ type: "SET_GAME_MIN_PLAYERS", payload: numberOfPlayers }),
    setMaxPlayers: numberOfPlayers => dispatch({ type: "SET_GAME_MAX_PLAYERS", payload: numberOfPlayers }),
    setSkillLevel: skillLevel => dispatch({ type: "SET_GAME_PREFERRED_SKILL_LEVELS", payload: skillLevel })
  }
}

const connector = connect(MapStateToProps, MapActionsToProps)

export default connector(CreateGame)
