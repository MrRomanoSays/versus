import React from 'react'

import 'font-awesome/css/font-awesome.css'

const ButtonFontAwesome = function (props) {
  return (
    <div>
      <i className={`fa ${props.iconName ? props.iconName : 'fa-question-circle'} ${props.iconSize ? props.iconSize : 'fa-lg'}`}></i>
    </div>
  )
}

export default ButtonFontAwesome
