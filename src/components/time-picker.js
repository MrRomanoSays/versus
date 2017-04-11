import React from 'react'
import TimePicker from 'react-times'

import 'react-times/css/material/default.css'
import moment from 'moment'

const SetTime = function (props) {
  return (
      <TimePicker
        timeMode="24"
        time={props.selectedTime}
        onTimeChange={props.onTimeChange}
        focused={true}
        colorPalette={props.colorPalette ? props.colorPalette : "light"}
      />
  )
}

export default SetTime
