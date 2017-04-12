import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const NavBar = function (props) {
  return (
<div>
<BrowserRouter>
  <nav className="db dt-l dt-m w-100 border-box pa2 ph5-l bg-dark-red">
    <a className="db dtc-l dtc-m v-mid mid-gray link dim w-100 w-25-l w-25-m tc tl-l mb2 mb0-l" href="#" title="Home">
      <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
    </a>
    <div className="db dtc-l dtc-m v-mid w-100 tc tr-l tr-m">
      <a className="link dim near-white f6 f5-l dib mr3 mr4-l" href={props.link1Url} title={props.link1Title}>{props.link1Title}</a>
      <a className="link dim near-white f6 f5-l dib mr3 mr4-l" href={props.link2Url} title={props.link2Title}>{props.link2Title}</a>
      <a className="link dim near-white f6 f5-l dib mr3 mr4-l" href={props.link3Url} title={props.link3Title}>{props.link3Title}</a>
      <a className="link dim near-white f6 f5-l dib mr3 mr4-l" href={props.link4Url} title={props.link4Title}>{props.link4Title}</a>
      <a className="link dim near-white f6 f5-l dib mr3 mr4-l" href={props.link5Url} title={props.link5Title}>{props.link5Title}</a>
    </div>
  </nav>
</BrowserRouter>
</div>
  )
}

export default NavBar
