import React from 'react'
import { equals, toUpper, toLower, tail, head } from 'ramda'
import { connect } from 'react-redux'

import ButtonLinkBack from '../components/button-link-back'
import ButtonBack from '../components/button-back'
import ButtonForward from '../components/button-forward'
import Button from '../components/button'


import backgroundPhoto from '../images/hockey-kid.jpg'

import View from '../components/view'
import SectionHeader from '../components/section-header'

import ContactInfo from '../components/contact-info'

import LocationPreferences from '../components/location-preferences'

import BasicDemographics from '../components/basic-demographics'

import PlayerBio from '../components/player-bio'


const postPlayer = (player, idToken) => {
   return fetch(`http://localhost:8080/players`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + idToken
    },
    method: "POST",
    body: JSON.stringify(player)
  })
}

class PlayerProfile extends React.Component {
  componentDidMount() {

  }
  render () {
    return (


  <div>
    <div className="cf" style={{background: `url(${backgroundPhoto}) no-repeat center fixed`, backgroundSize: 'cover'}}>
      <div className="fr pa3 mr5-ns mt5-ns mt0-s mb7-ns  bg-white black-70 measure-wide times">


        <div className="fl w-100">

        {equals(this.props.view, 'step1') && (
          <View
            headline=""

            body=

              {<ContactInfo
                sectionHeader={<SectionHeader
                  headline=""
                  subHeadline=""
                  sectionTitle="Contact Information"
                />}

              firstName={this.props.player.firstName}
              firstNameHandleChange={this.props.setPlayerFirstName}

              lastName={this.props.player.lastName}
              lastNameHandleChange={this.props.setPlayerLastName}

              email={this.props.player.email}
              emailHandleChange={this.props.setPlayerEmail}

              phone={this.props.player.phone}
              phoneHandleChange={this.props.setPlayerPhone}
              />}

          buttonCenter={<Button
            buttonText="Cancel"
            onClick= {e => {
              this.props.reset()
              this.props.resetPlayer()
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
      <View
        headline=""

        body=

          {<LocationPreferences
            sectionHeader={<SectionHeader
              headline=""
              subHeadline=""
              sectionTitle="Location Preferences"
            />}

          streetAddress={this.props.player.streetAddress}
          streetAddressHandleChange={this.props.setPlayerStreetAddress}

          city={this.props.player.city}
          cityHandleChange={this.props.setPlayerCity}

          state={this.props.player.state}
          stateHandleChange={this.props.setPlayerState}

          zipcode={this.props.player.zipcode}
          zipcodeHandleChange={this.props.setPlayerZipcode}
          />}

      buttonLeft={<ButtonBack
        onClick={e => this.props.next('step1')}
        />}

      buttonCenter={<Button
        buttonText="Cancel"
        onClick= {e => {
          this.props.reset()
          this.props.resetPlayer()
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
      <View
        headline=""

        body=

          {<BasicDemographics
            sectionHeader={<SectionHeader
              headline=""
              subHeadline=""
              sectionTitle="Basic Demographics"
            />}

          gender={this.props.player.gender}
          genderHandleChange={this.props.setPlayerGender}

          age={this.props.player.age}
          handleAgeChange={this.props.setPlayerAge}
          />}

      buttonLeft={<ButtonBack
        onClick={e => this.props.next('step2')}
        />}

      buttonCenter={<Button
        buttonText="Cancel"
        onClick= {e => {
          this.props.reset()
          this.props.resetPlayer()
          this.props.history.push('/dashboard')
        }}
        />}

      buttonRight={<ButtonForward
        onClick={e => this.props.next('stepFinal')}
        />}
      >

      </View>
      )}


      {equals(this.props.view, 'stepFinal') && (
      <View
        headline=""

        body=

          {<PlayerBio
            sectionHeader={<SectionHeader
              headline=""
              subHeadline=""
              sectionTitle="Additional Info"
            />}

          bio={this.props.player.bio}
          bioHandleChange={this.props.setPlayerBio}

          />}

      buttonLeft={<ButtonBack
        onClick={e => this.props.next('step3')}
        />}

      buttonCenter={<Button
        buttonText="Cancel"
        onClick= {e => {
          this.props.reset()
          this.props.resetPlayer()
          this.props.history.push('/dashboard')
        }}
        />}

        buttonRight={<ButtonForward
          buttonText="Save Profile"
          onClick= {
            this.props.addPlayer(this.props.history, this.props.player, this.props.auth.idToken)}
        />}
      >

      </View>
      )}








          </div>
        </div>
      </div>
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
      dispatch({ type: "RESET_PLAYER" })
    },
    resetPlayer: () => { dispatch({ type: "RESET_PLAYER" })},
    previous: (view) => dispatch({ type: "PREVIOUS", payload: view }),
    next: (view) => dispatch({ type: "NEXT", payload: view }),

    addPlayer: (history, player, idToken) => (e) => {
      postPlayer(player, idToken)
        .then(res => res.json())
        .then(res => {
          if (res.id) {
            dispatch({ type: "RESET" })
            dispatch({ type: "RESET_PLAYER" })
            history.push('/dashboard')
          } else {
            alert('Error saving to the database.')
          }
        })
        .catch(err => console.log(err.message))
    },


    setPlayerFirstName: (firstName) => dispatch({ type: "SET_PLAYER_FIRST_NAME", payload: toUpper(head(toLower(firstName))) + tail(toLower(firstName)) }),
    setPlayerLastName: (lastName) => dispatch({ type: "SET_PLAYER_LAST_NAME", payload: toUpper(head(toLower(lastName))) + tail(toLower(lastName)) }),
    setPlayerEmail: (email) => dispatch({ type: "SET_PLAYER_EMAIL", payload: email }),
    setPlayerPhone: (phone) => dispatch({ type: "SET_PLAYER_PHONE", payload: phone }),
    setPlayerStreetAddress: (streetAddress) => dispatch({ type: "SET_PLAYER_STREET_ADDRESS", payload: streetAddress }),
    setPlayerCity: (city) => dispatch({ type: "SET_PLAYER_CITY", payload: toUpper(head(toLower(city))) + tail(toLower(city)) }),
    setPlayerState: (state) => dispatch({ type: "SET_PLAYER_STATE", payload: state }),
    setPlayerZipcode: (zipcode) => dispatch({ type: "SET_PLAYER_ZIPCODE", payload: zipcode }),
    setPlayerGender: (gender) => dispatch({ type: "SET_PLAYER_GENDER", payload: gender }),
    setPlayerAge: (age) => dispatch({ type: "SET_PLAYER_AGE", payload: age }),
    setPlayerBio: (bio) => dispatch({ type: "SET_PLAYER_BIO", payload: bio })

  }
}

const connector = connect(MapStateToProps, MapActionsToProps)

export default connector(PlayerProfile)
