import React from 'react'

import 'font-awesome/css/font-awesome.css'

const ButtonFontAwesome = function (props) {
  return (
    <div title={`${props.title ? props.title : null }`}>
      <i className={`fa ${props.iconName ? props.iconName : 'fa-question-circle'} ${props.iconSize ? props.iconSize : 'fa-lg'}  ${props.iconTransformation ? props.iconTransformation : null }`}></i>
    </div>
  )
}

export default ButtonFontAwesome
