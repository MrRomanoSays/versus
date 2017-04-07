import React from 'react'

const Button = function (props) {
  return (
    <div>
      <div className="f6 no-underline black bg-animate hover-bg-dark-red hover-white inline-flex items-center pa3 ba border-box"
      onClick={props.onClick}>
        <span>{props.buttonText}</span>

      </div>
    </div>
  )
}

export default Button
