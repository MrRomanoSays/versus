import React from 'react'

const ButtonCTA = function (props) {
  return (
    <div>
      <div className="pointer avenir no-underline bg-gold hover-bg-yellow bg-animate inline-flex items-center pa2 ba border-box" onClick={props.onClick}>
        <span className="">{props.buttonText}</span>
      </div>
    </div>
  )
}

export default ButtonCTA




// import Button from ''
//
// <ButtonCTA
//   onClick=
//   buttonText=
// />
