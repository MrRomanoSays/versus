import React from 'react'

const ButtonCircleImage = function (props) {
  return (
    <img
      src={props.image}
      className="br-100 ba h3 w3 dib" alt="avatar"
      onClick={props.handleClick}
    />
  )
}

export default ButtonCircleImage
