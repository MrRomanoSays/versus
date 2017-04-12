import React from 'react'

const SplashPage = function (props) {
  return (
<div>

  <div className="cover dt w-100 vh-100 bg-center" style={{backgroundImage: `url(${props.backgroundImage})`}}>

  <div className="tc dtc v-btm pb6">
    <div className="bg-black-80 f1 f1-l fw2 dark-red lh-title athelas ttu tracked i pt1">{props.title}</div>
    <div className="bg-black-80 fw2 f5 white-80 mb4 avenir pt1 pb3 pl3 pr3">{props.subheadline}</div>

    <a className="f6 no-underline dim tc bg-blue white ba b--blue ph3 pa3 mr3" href={props.primaryButtonUrl}>{props.primaryButton}</a>
    <a className="f6 no-underline dim tc white ba b--white pa3 ml3" href={props.secondaryButtonUrl}>{props.secondaryButton}</a>
  </div>
  </div>
  </div>
  )
}

export default SplashPage
