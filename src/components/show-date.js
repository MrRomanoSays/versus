import React from 'react'

import moment from 'moment'

const ShowDate = function (props) {
  return (

      <div>
            <div className="cf">
              <div className="fl w-100 ba dark-red"></div>
              <div className="fl w-100 w-33-l tc pv1 bg-black-20">
              <div className="w-100 tc pv3 bg-washed-red mb1">
                Game Day: <br/> {props.currentGameDate}
              </div><br/>
                {props.calendar}
              </div>
              <div className="fl w-100 w-50-m w-34-l tc pv1 bg-black-10">
              <div className="w-100 tc pv3 tc bg-black-10 mb1">
                Game Start Time: <br/> {props.currentGameTime === "Invalid date" ? "" : props.currentGameTime}
              </div><br/>
                {props.gameClockStart}
              </div>
              <div className="fl w-100 w-50-m w-33-l tc pv1 bg-black-20">
              <div className="w-100 tc pv3 tc bg-black-05 mb1">
                Confirmation Deadline: <br/> {props.cancellationDeadline === "Invalid date" ? "" : props.cancellationDeadline}
              </div><br/>
                {props.gameClockCancel}
              </div>
            </div>
      </div>
  )
}


export default ShowDate
