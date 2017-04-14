import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const NavBar = function (props) {
  return (
<div>
  <nav className="ttu tracked avenir fw4 db dt-l dt-m w-100 border-box pa2 ph5-l bg-black">
    <Link className="db dtc-l dtc-m v-mid mid-gray link dim w-100 w-25-l w-25-m tc tl-l mb2 mb0-l" to="/">
      <img src="http://lorempixel.com/125/125/sports/" className="dib w2 h2 br-100" alt="Random Sport Picture"/>
    </Link>
    <div className="db dtc-l dtc-m v-mid w-100 tc tr-l tr-m">
      <Link className="link dim white-90 ba pa1 f6 f5-l dib mr3 mr4-l" to={props.link1Url}>{props.link1Title}</Link>
      <Link className="link dim white-90 ba pa1 f6 f5-l dib mr3 mr4-l" to={props.link2Url}>{props.link2Title}</Link>
    </div>
  </nav>
</div>
  )
}

export default NavBar
