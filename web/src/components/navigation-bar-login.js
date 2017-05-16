import React from 'react'
import { Link } from 'react-router-dom'

import ButtonFontAwesome from './button-font-awesome'


const NavBarLogin = function (props) {
  return (

<div>

    {props.auth ?
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
            </div>
          </nav>
      </div>

      :

      <div>
          <nav className="ttu tracked avenir fw4 dt w-100 border-box pa2 ph5-l bg-black">
            <div className="tc">
              {props.back === true ? <Link to="/" className="ba fl mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">VS</Link> : null}
              <Link to="/about/versus" className="ba fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">How VS Works</Link>
              <Link to="/about/creator" className="ba fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">Contact Creator</Link>
            </div>
          </nav>
      </div>

    }


</div>
  )
}

export default NavBarLogin


// <NavBarLogin
//
//
//
// />

//SAVE
/*
<div>
    <nav className="ttu tracked avenir fw4 dt w-100 border-box pa2 ph5-l bg-black">
      <div className="tc">
        props.back=true ? <Link to="/about/versus" className="ba fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">VS</Link> : null
        <Link to="/about/versus" className="ba fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">How VS Works</Link>
        <Link to="/about/creator" className="ba fr mt1 mb2 link dim white-90 pa1 f6 f5-l mr2">Contact Creator</Link>
      </div>
    </nav>
</div>
*/
