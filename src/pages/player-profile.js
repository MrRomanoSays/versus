import React from 'react'

import ButtonLinkBack from '../components/button-link-back'

const PlayerProfile = function (props) {
  return (
    <div>
      <h1>Player Profile goes here</h1>
      <ButtonLinkBack
        buttonText=""
        linkUrl="/dashboard"
      />
    </div>
  )
}

export default PlayerProfile
