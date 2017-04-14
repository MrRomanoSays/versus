import React from 'react'

const ButtonLinkBack = function (props) {
  return (
    <div>
      <a href={props.linkUrl} className="f6 no-underline white bg-animate hover-dark-red hover-white inline-flex items-center pa3 ba border-box">
        <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill: 'currentcolor'}}>
          <title>chevronLeft icon</title>
          <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" />
        </svg>
        <span className="pl1">{props.buttonText}</span>
      </a>
    </div>
  )
}

export default ButtonLinkBack
