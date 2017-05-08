import React from 'react'
import { connect } from 'react-redux'

import NavBarLogin from '../components/navigation-bar-loggedIn'

import BackgroundImageWithBanner from '../components/background-image-with-banner'
import backgroundImage from '../images/tall-building-with-hoop.jpg'
import Header from '../components/header'
import BodyText from '../components/body-text'


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

      <div className="pl4 pr4">
        <Header headline="Promoting the self-centered demands in all of us"/>
        <BodyText
          text="Versus is banking on the idea that we are all seeking our own definition of a perfect game.  So, instead of 'taking your ball and going home' when those you're playing with are less amenable to your preferences, just create the game you want from the start!  Versus aims to be the platform for players looking for players like them.  We'll be adding more options in the game creation mode based on user demand, but never at the expense of making game planning and management too tedious."
        />
        <Header headline="Some Ground Rules" subheadline="Safety is critical"/>
        <BodyText
          text="Let's be real, VS cannot vet your opponents.  We have built in opportunities for you to investigate, to the best of your ability/desire your opponents, but put simply it's an imperfect system.  Be safe.  Play with friends, talk to your opponents, if they are strangers, before agreeing to meet them.  Choose game times that are during the day.  Select locations where you'd expect to have other people around.  Let others know where you'll be and who you are meeting."
        />
        <BodyText
          text="Also, know that VS is not reserving a court for your game to happen.  Think of VS as a facilitator for pickup games.  Expect to wait and take advantage of it by meeting someone new, or catching up with friends.  Not into that?  Stretch."
        />
      </div>
    </div>
  )
}

const connector = connect(state=>state)

export default connector(HowItWorks)
