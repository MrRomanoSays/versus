import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

const Example2 = function (props) {
  return (
    <DatePicker
      onChange={props.handleChange}
      todayButton={"Select Today"}
      withPortal
    />
  )
}

export default Example2
