import React from 'react'

const ShowDate = function (props) {
  return (

      <div>
            <div className="cf">
              <div className="fl w-100 ba bw2 gray"></div>
              <div className="fl w-100 w-33-l tc pv1 bg-black-70">
              <div className="w-100 tc pv3 bg-yellow mb1">
                Game Day: <br/> {props.currentGameDate}
              </div><br/>
                {props.calendar}
              </div>
              <div className="fl w-100 w-50-m w-34-l tc pv1 bg-black-70">
              <div className="w-100 tc pv3 tc bg-light-yellow mb1">
                Game Start Time: <br/> {props.currentGameTime === "Invalid date" ? "" : props.currentGameTime}
              </div><br/>
                {props.gameClockStart}
              </div>
              <div className="fl w-100 w-50-m w-33-l tc pv1 bg-black-70">
              <div className="w-100 tc pv3 tc bg-washed-yellow mb1">
                Confirmation Deadline: <br/> {props.cancellationDeadline === "Invalid date" ? "" : props.cancellationDeadline}
              </div><br/>
                {props.gameClockCancel}
              </div>
            </div>
      </div>
  )
}


export default ShowDate
