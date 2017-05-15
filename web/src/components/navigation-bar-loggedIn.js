import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ButtonFontAwesome from './button-font-awesome'
const NavBarLoggedIn = function (props) {

const player = props.player

  return (

    <div>

      {/* Displays if userId is confirmed.  This means that the user's profile data has been saved in the database */}
      {props.userId ?
      <div>
        {/*
        LEFT SIDE OF NAVIGATION BAR
        Player Avatar Loaded from Social Media, or if not present a random sports image from lorempixel.com
        */}
        <nav className="ttu tracked avenir fw4 dt w-100 border-box pa2 ph5-l bg-black">
          <div className="tc">
            <img src={props.playerAvatar ? `${props.playerAvatar}` : 'http://lorempixel.com/125/125/sports/'} className='ba br-100 fl w2 h2 mr2 mt1'/>

            {/*Logout "X" icon, clears user data and auth properties*/}
            <Link to="/" className="fl mt1 mb2 link hover-dark-red white-90 pa1 f6 f5-l mr2"
                onClick={e => {
                  props.dispatch({type: 'CLEAR_AUTH'})
                  props.dispatch({type: 'CLEAR_USER'})
              }}>
              <ButtonFontAwesome
                iconName="fa-close"
                iconSize="fa-2x"
                iconTransformation=""
                title="Logout"
              />
            </Link>

            {/*Contact Site Creator Email Icon*/}
            <Link to="/about/creator" className=" fl mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">
              <ButtonFontAwesome
                iconName="fa-handshake-o"
                iconSize="fa-2x"
                iconTransformation=""
                title="Contact Site Creator"
              />
            </Link>

            {/*How Vs. Works Icon*/}
            <Link to="/about/versus" className=" fl mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">
              <ButtonFontAwesome
                iconName="fa-info-circle"
                iconSize="fa-2x"
                iconTransformation=""
                title="How Vs. Works"
              />
            </Link>

            {/*
            RIGHT SIDE OF NAVIGATION BAR (FROM RIGHT TO LEFT)
            Create Game (Plus Sign Icon)
            */}
            <Link to="/creategame" className=" fr mt1 mb2 link gold hover-yellow pa1 f6 f5-l mr2"
              onClick={e => {
                  props.dispatch({type: 'RESET'})
                  props.dispatch({type: 'RESET_GAME'})
              }}
            >
              <ButtonFontAwesome
                iconName="fa-plus-square-o"
                iconSize="fa-2x"
                iconTransformation=""
                title="Create A Game"
              />
            </Link>

            {/*Edit Player Info (Address Card Icon)*/}
            <Link to="/editprofile" className=" fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">
              <ButtonFontAwesome
                iconName="fa-address-card-o"
                iconSize="fa-2x"
                iconTransformation=""
                title="Edit Player Profile"
              />
            </Link>

            {/*Go to Dashboard Icon*/}
            <Link to="/dashboard" className=" fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">
              <ButtonFontAwesome
                iconName="fa-tachometer"
                iconSize="fa-2x"
                iconTransformation=""
                title="Dashboard"
              />
            </Link>

          </div>
        </nav>

      </div>

      /*Displays if the user's data has not been found in the database (aka New User)*/
      :

      <div>
        <nav className="ttu tracked avenir fw4 dt w-100 border-box pa2 ph5-l bg-black">
          <div className="tc">
            <img src={props.playerAvatar ? `${props.playerAvatar}` : 'http://lorempixel.com/125/125/sports/'} className='ba br-100 fl w2 h2 mr2 mt1'/>

            <Link to="/" className="hover-dark-red fl mt1 mb2 link white-90 pa1 f6 f5-l mr2"
              onClick= {e => {
                props.dispatch({type: 'CLEAR_AUTH'})
                props.dispatch({type: 'CLEAR_USER'})
              }}>
              <ButtonFontAwesome
                iconName="fa-close"
                iconSize="fa-2x"
                iconTransformation=""
                title="Logout"
              />
            </Link>

            <Link to="/about/creator" className="fl mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">
              <ButtonFontAwesome
                iconName="fa-handshake-o"
                iconSize="fa-2x"
                iconTransformation=""
                title="Contact Site Creator"
              />
            </Link>

            <Link to="/about/versus" className="fl mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">
              <ButtonFontAwesome
                iconName="fa-info-circle"
                iconSize="fa-2x"
                iconTransformation=""
                title="How Vs. Works"
              />
            </Link>

            {/*Signifies user has authenticated, but has not yet checked the database to confirm if their user data exists.*/}
            props.goToDashboard === true &&

            {/*Dashboard Icon, onClick sets player user data in state which will lead to database when dashboard page mounts*/}
            <Link to="/dashboard" className=" fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2"
              onClick=
                {e => {
                  props.dispatch({type: 'SET_PLAYER_USER_ID', payload: props.user.user_id})
                  props.dispatch({type: 'SET_PLAYER_USER_PICTURE', payload: props.user.picture})
                }}
            >
              <ButtonFontAwesome
                iconName="fa-tachometer"
                iconSize="fa-2x"
                iconTransformation=""
                title="Dashboard"
                iconColor="yellow"
              />
            </Link>

          </div>
        </nav>
      </div> /* JSX WRAPPER */
      }

    </div>
  )
}

const connector = connect(state=>state)

export default connector(NavBarLoggedIn)
