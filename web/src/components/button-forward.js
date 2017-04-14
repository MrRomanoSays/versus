import React from 'react'

const ButtonForward = function (props) {
  return (
    <div>
      <div className="no-underline white bg-animate hover-dark-red hover-white inline-flex items-center pa2 ba border-box" onClick={props.onClick}>
        <span className="">{props.buttonText}</span>
        <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{fill: 'currentcolor'}}>
          <title>chevronRight icon</title>
          <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" />
        </svg>
      </div>
    </div>
  )
}

export default ButtonForward
