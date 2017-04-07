import React from 'react'

import NavBar from '../components/navigation-bar'
import SplashPage from '../components/splash-page'
import backgroundImage from '../images/splash-page-man.jpg'

const Home = function (props) {
  return (
    <div>
      <NavBar
        link1Title="How it works"
        link1Url="/about/versus"

        link2Title="Contact Creator"
        link2Url="/about/creator"
      />
      <SplashPage
        backgroundImage={backgroundImage}
        title="Versus"
        subheadline="The quick and easy way to find local competition that fits your interests and your schedule."
        primaryButton="Sign Up"
        primaryButtonUrl=""
        secondaryButton="Sign In"
        secondaryButtonUrl="/dashboard"
      />
    </div>

  )
}

export default Home
