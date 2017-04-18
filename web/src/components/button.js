import React from 'react'

const Button = function (props) {
  return (
    <div>
      <div className="pointer f6 no-underline white bg-animate dim hover-white inline-flex items-center pa2 ba border-box"
      onClick={props.onClick}>
        <span>{props.buttonText}</span>
      </div>
    </div>
  )
}

export default Button
