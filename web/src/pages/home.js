import React from 'react'

import NavBar from '../components/navigation-bar'
import SplashPage from '../components/splash-page'
import backgroundImage from '../images/splash-page-man.jpg'

import { connect } from 'react-redux'

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


      <h1>Auth0 Example</h1>
      {
        props.auth
          ? <button onClick={e => {
            props.dispatch({type: 'CLEAR_AUTH'})
            props.dispatch({type: 'CLEAR_USER'})
          }}>Log out</button>
          : <button onClick={e => props.lock.show()}>Login</button>
      }
      {props.auth && (
      <div>
        <img src={props.user.picture} />
        <h2>Welcome {props.user.nickname}</h2>
      </div>
          )}





    </div>

  )
}

const connector = connect(state=>state)

export default connector(Home)
