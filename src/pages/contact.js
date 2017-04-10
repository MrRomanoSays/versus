import React from 'react'

import ContactMeHeader from '../components/contact-me'
import Header from '../components/header'
import BodyText from '../components/body-text'
import ButtonBack from '../components/button-back'
import Home from './home'

const Contact = function (props) {
  return (

      <div>
        
        <ContactMeHeader />
        <Header
          headline="About This Project"
        />
        <BodyText
          text="Versus was built after ten weeks of study at the Jack Russell Software (JRS) Innovation Center's Coding School. For context, I entered this intensive program with litte to no technical skill outside of basic html. Over the course of the program I've gained a broad understanding of full stack web development and many of the tools necessary to build an idea from concept to production.

          The JRS Coding School provided a deep dive in Javascript with a consistent emphasis on functional programming."
        />

        <div className="pl4">
          <ButtonBack
            buttonText="Versus"
            linkUrl="/"
          />
        </div>
      </div>


  )
}

export default Contact
