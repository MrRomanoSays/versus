import React from 'react'

import NavBar from '../components/navigation-bar'
import SplashPage from '../components/splash-page'
import backgroundImage from '../images/splash-page-man.jpg'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = function (props) {
  return (
    <div>

      <NavBar
        link1Url="/about/versus"
        link1Title="How It Works"
        link2Url="/about/creator"
        link2Title="Contact"
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
