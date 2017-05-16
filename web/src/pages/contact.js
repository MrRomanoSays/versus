import React from 'react'
import { connect } from 'react-redux'

import NavBarLogin from '../components/navigation-bar-login'
import NavBarLoggedIn from '../components/navigation-bar-loggedIn'
import ContactMeHeader from '../components/contact-me'
import Header from '../components/header'
import BodyText from '../components/body-text'


import { pathOr } from 'ramda'

const Contact = function (props) {
  return (

    <div>

    {
    props.auth ?

    <NavBarLoggedIn
      auth={props.auth}
      userId={props.player._id}
      player={props.player}
      playerAvatar={props.user.picture}
      goToDashboard={true}
    />

    :

    props.match.url === "/about/creator" ?

    <NavBarLogin
      auth={props.auth}
      playerAvatar={pathOr("", ["user", "picture"], props)}
      back={true}
    />

    :

    <NavBarLogin
      auth={props.auth}
      playerAvatar={pathOr("", ["user", "picture"], props)}
      back={false}
    />
  }

        <ContactMeHeader />


        <div className="pl4 pr4">
          <Header
            headline="About Versus"
          />
          <BodyText
            text="Hello.  Thanks for your interest in this project.  Versus was built exclusively by me after ten weeks of study at the Jack Russell Software (JRS) Innovation Center's Coding School. The project was created during a two-week sprint that led to a demonstration of the app's functionality."
          />
          <BodyText
            text="For context, I entered this intensive program with litte to no technical skill beyond basic html. Through the class I gained a broad understanding of full-stack web development and a variety of skills necessary to build web-oriented applications."
          />
          <Header
            headline="The Tech Underneath the Uniform"
          />
          <BodyText
            list={[
              ["Front End", ["HTML", "CSS with Tachyons", "Javascript (including ES6)", "Ramda.js", "React", "JSX", "Redux", "React-Redux", "React-Router-Dom"]],
              ["Back End", ["Node.js", "HTTP", "Express.js", "CouchDB (noSQL)", "PouchDB"]],
              ["Other Tools", ["Git with GitHub", "Auth0", "Atom", "CodePen", "Balsamiq"]]
            ]}
          />
          <Header
            headline="User Stories and Mock Ups"
          />
          <BodyText
            text="Section about planning with user stories and the use of balsamiq (w/ images) to showcase at least the site map"
          />
          <Header
            headline="Selecting the Stack"
          />
          <BodyText
            text="Ever changing data (nosql vs sql) thought process..."
          />

          <Header
            headline="With Great Functionality Comes Great Responsibility"
          />
          <BodyText
            text="Enter safety and Auth0 discussion..."
          />
          <Header
            headline="What's Next?"
          />
          <BodyText
            text="..."
          />

      </div>
    </div>


  )
}

const connector = connect(state=>state)

export default connector(Contact)
