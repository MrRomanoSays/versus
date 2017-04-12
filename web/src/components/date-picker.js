import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

const Example2 = function (props) {
  return (
    <div className="tc">
      <DatePicker

      onChange={props.handleChange}
      todayButton={"Select Today"}
      minDate={moment()}
      inline
    />
    </div>
  )
}

export default Example2
