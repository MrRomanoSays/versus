import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import { connect } from 'react-redux'

import ButtonFontAwesome from './button-font-awesome'

const NavBarLoggedIn = function (props) {

const player = props.player

  return (

<div>

{props.userId
    ?
<div>
    <nav className="ttu tracked avenir fw4 dt w-100 border-box pa2 ph5-l bg-black">
        <div className="tc">
          <img src={props.playerAvatar ? `${props.playerAvatar}` : 'http://lorempixel.com/125/125/sports/'} className='ba br-100 fl w2 h2 mr2 mt1'/>

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

          <Link to="/about/creator" className=" fl mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">
            <ButtonFontAwesome
              iconName="fa-handshake-o"
              iconSize="fa-2x"
              iconTransformation=""
              title="Contact Site Creator"
            />
          </Link>

          <Link to="/about/versus" className=" fl mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">
            <ButtonFontAwesome
              iconName="fa-info-circle"
              iconSize="fa-2x"
              iconTransformation=""
              title="How Vs. Works"
            />
          </Link>

          <Link to="/creategame" className=" fr mt1 mb2 link gold hover-yellow pa1 f6 f5-l mr2"
            onClick={e => {
                props.dispatch({type: 'RESET'})
                props.dispatch({type: 'RESET_GAME'})
            }}

          /* RIGHT SIDE OF NAVIGATION BAR */

          >
            <ButtonFontAwesome
              iconName="fa-plus-square-o"
              iconSize="fa-2x"
              iconTransformation=""
              title="Create A Game"
            />
          </Link>

          <Link to="/editprofile" className=" fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">
            <ButtonFontAwesome
              iconName="fa-address-card-o"
              iconSize="fa-2x"
              iconTransformation=""
              title="Edit Player Profile"
            />
          </Link>

          <Link to="/dashboard" className=" fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2"

          >
            <ButtonFontAwesome
              iconName="fa-tachometer"
              iconSize="fa-2x"
              iconTransformation=""
              title="Dashboard"
            /></Link>


</div>
</nav>

</div>

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



              props.goToDashboard === true &&

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
</div>
}


</div>
  )
}

const connector = connect(state=>state)

export default connector(NavBarLoggedIn)
