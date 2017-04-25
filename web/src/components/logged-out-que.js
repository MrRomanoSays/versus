import React from 'react'
import { Link } from 'react-router-dom'

import BackgroundImageWithBanner from '../components/background-image-with-banner'
import backgroundImage from '../images/eager-runner.jpg'

import ButtonCTA from '../components/button-cta'

const LoggedOutQue = function (props) {
  return (

    <div>
      <BackgroundImageWithBanner
        backgroundImage={backgroundImage}
        bannerText="Uh Oh.  You were logged out."
        button={<ButtonCTA onClick={props.auth} buttonText="Put Me In Coach!"/>}
      />
    </div>
  )
}

export default LoggedOutQue
