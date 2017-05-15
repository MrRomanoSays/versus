import React from 'react'

import NavBarLogin from '../components/navigation-bar-login'
import SplashPage from '../components/splash-page'
import backgroundImage from '../images/splash-page-man.jpg'

import { connect } from 'react-redux'

const Home = function (props) {
  return (
    <div>

      <NavBarLogin
        auth={props.auth}
        playerAvatar={props.user.picture}
        back={false}

      />
      <SplashPage
        backgroundImage={backgroundImage}
        title="Versus"
        subheadline="The quick and easy way to find local competition that fits your interests and your schedule."
      />

    </div>

  )
}

const connector = connect(state=>state)


export default connector(Home)
