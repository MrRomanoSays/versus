import React from 'react'
import { Link } from 'react-router-dom'

const ProfileQue = function (props) {
  return (
    <div>
      <header className="bg-gold sans-serif">
        <div className="mw9 center pa4 pt5-ns ph7-l">
          <h2 className="f1 f-subheadline-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa4-l pa3 tracked-tight">{`Easy Tiger`}</span>
          </h2>
          <h4 className="f3 fw1 georgia i">{`Before we go any further let's set up your player profile.`}</h4>
            <Link to="/editprofile" className="ba b--white bg-black-90 link pa1 f6 ttu trackedw white">{`Edit Profile Now`}</Link>
        </div>
      </header>
    </div>
  )
}

export default ProfileQue
