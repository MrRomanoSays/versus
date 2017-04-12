import React from 'react'

const ButtonList = function (props) {
return (
  <div className="hover-bg-black hover-white ba b--black-10 tc pv3 link grow">
    {props.buttonText}
  </div>
)
}
export default ButtonList
