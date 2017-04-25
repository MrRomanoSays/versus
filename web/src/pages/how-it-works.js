import React from 'react'

import NavBarLogin from '../components/navigation-bar-loggedIn'

import BackgroundImageWithBanner from '../components/background-image-with-banner'
import backgroundImage from '../images/tall-building-with-hoop.jpg'

import { connect } from 'react-redux'


const HowItWorks = function (props) {
  return (
    <div>

      <NavBarLogin
        auth={props.auth}
        playerAvatar={props.user.picture}

      />

      <BackgroundImageWithBanner
        backgroundImage={backgroundImage}
        bannerText="If you add it, they will come."
        subText=""
      />

      <p>...</p>




    </div>
  )
}

const connector = connect(state=>state)

export default connector(HowItWorks)
