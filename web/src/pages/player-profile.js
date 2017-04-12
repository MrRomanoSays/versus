import React from 'react'
import { equals } from 'ramda'
import { connect } from 'react-redux'

import ButtonLinkBack from '../components/button-link-back'
import ButtonBack from '../components/button-back'
import ButtonForward from '../components/button-forward'
import Button from '../components/button'

import PlayerProfileTemplate from '../components/player-profile-template'
import backgroundPhoto from '../images/hockey-kid.jpg'

import View from '../components/view'
import SectionHeader from '../components/section-header'

import ContactInfo from '../components/contact-info'

import LocationPreferences from '../components/location-preferences'

import BasicDemographics from '../components/basic-demographics'

import PlayerBio from '../components/player-bio'

const PlayerProfile = function (props) {
  return (


<div>
  <div className="cf" style={{background: `url(${backgroundPhoto}) no-repeat center fixed`, backgroundSize: 'cover'}}>
    <div className="fr pa3 pa4-ns bg-white black-70 measure-wide times">
      <header className="">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Player Profile</h3>
      </header>

      <div className="fl w-100">

      {equals(props.view, 'step1') && (
        <View
          headline=""

          body=

            {<ContactInfo
              sectionHeader={<SectionHeader
                headline=""
                subHeadline=""
                sectionTitle="Contact Information"
              />}

            firstName={props.player.firstName}
            firstNameHandleChange={props.setPlayerFirstName}

            lastName={props.player.lastName}
            lastNameHandleChange={props.setPlayerLastName}

            email={props.player.email}
            emailHandleChange={props.setPlayerEmail}

            phone={props.player.phone}
            phoneHandleChange={props.setPlayerPhone}
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
    <View
      headline=""

      body=

        {<LocationPreferences
          sectionHeader={<SectionHeader
            headline=""
            subHeadline=""
            sectionTitle="Location Preferences"
          />}

        streetAddress={props.player.streetAddress}
        streetAddressHandleChange={props.setPlayerStreetAddress}

        city={props.player.city}
        cityHandleChange={props.setPlayerCity}

        state={props.player.state}
        stateHandleChange={props.setPlayerState}

        zipcode={props.player.zipcode}
        zipcodeHandleChange={props.setPlayerZipcode}
        />}

    buttonLeft={<ButtonBack
      onClick={e => props.next('step1')}
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
    <View
      headline=""

      body=

        {<BasicDemographics
          sectionHeader={<SectionHeader
            headline=""
            subHeadline=""
            sectionTitle="Basic Demographics"
          />}

        gender={props.player.gender}
        genderHandleChange={props.setPlayerGender}

        age={props.player.age}
        handleAgeChange={props.setPlayerAge}
        />}

    buttonLeft={<ButtonBack
      onClick={e => props.next('step2')}
      />}

    buttonCenter={<Button
      buttonText="Cancel"
      onClick= {e => {
        props.reset()
        props.history.push('/dashboard')
      }}
      />}

    buttonRight={<ButtonForward
      onClick={e => props.next('stepFinal')}
      />}
    >

    </View>
    )}


    {equals(props.view, 'stepFinal') && (
    <View
      headline=""

      body=

        {<PlayerBio
          sectionHeader={<SectionHeader
            headline=""
            subHeadline=""
            sectionTitle="Additional Info"
          />}

        bio={props.player.bio}
        bioHandleChange={props.setPlayerBio}

        />}

    buttonLeft={<ButtonBack
      onClick={e => props.next('step3')}
      />}

    buttonCenter={<Button
      buttonText="Cancel"
      onClick= {e => {
        props.reset()
        props.history.push('/dashboard')
      }}
      />}

      buttonRight={<ButtonForward
        buttonText="Save Profile"
        onClick= {e => {
          props.add(props.player)
          props.reset()
          props.history.push('/dashboard')
        }}
      />}
    >

    </View>
    )}








        </div>
      </div>
    </div>
  </div>
)}



const MapStateToProps = function (state) {
  return state
}

const MapActionsToProps = function (dispatch) {
  return {
    reset: () => {
      dispatch({ type: "RESET" })
      dispatch({ type: "RESET_PLAYER" })
    },
    previous: (view) => dispatch({ type: "PREVIOUS", payload: view }),
    next: (view) => dispatch({ type: "NEXT", payload: view }),
    add: (player) => dispatch({ type: "ADD_PLAYER", payload: player }),

    setPlayerFirstName: (firstName) => dispatch({ type: "SET_PLAYER_FIRST_NAME", payload: firstName }),
    setPlayerLastName: (lastName) => dispatch({ type: "SET_PLAYER_LAST_NAME", payload: lastName }),
    setPlayerEmail: (email) => dispatch({ type: "SET_PLAYER_EMAIL", payload: email }),
    setPlayerPhone: (phone) => dispatch({ type: "SET_PLAYER_PHONE", payload: phone }),
    setPlayerStreetAddress: (streetAddress) => dispatch({ type: "SET_PLAYER_STREET_ADDRESS", payload: streetAddress }),
    setPlayerCity: (city) => dispatch({ type: "SET_PLAYER_CITY", payload: city }),
    setPlayerState: (state) => dispatch({ type: "SET_PLAYER_STATE", payload: state }),
    setPlayerZipcode: (zipcode) => dispatch({ type: "SET_PLAYER_ZIPCODE", payload: zipcode }),
    setPlayerGender: (gender) => dispatch({ type: "SET_PLAYER_GENDER", payload: gender }),
    setPlayerAge: (age) => dispatch({ type: "SET_PLAYER_AGE", payload: age }),
    setPlayerBio: (bio) => dispatch({ type: "SET_PLAYER_BIO", payload: bio })

  }
}

const connector = connect(MapStateToProps, MapActionsToProps)

export default connector(PlayerProfile)
