import React from 'react'

const ButtonBack = function (props) {
  return (
    <div>
      <div className="pointer f6 no-underline white bg-animate hover-gold inline-flex items-center pa2 ba border-box"
      onClick={props.onClick}>
        <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill: 'currentcolor'}}>
          <title>chevronLeft icon</title>
          <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" />
        </svg>
        <span className="">{props.buttonText}</span>
      </div>
    </div>
  )
}

export default ButtonBack

// <ButtonBack
//   onClick=
//   buttonText=""
// />
