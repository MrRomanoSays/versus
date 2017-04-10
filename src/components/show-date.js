import React from 'react'

const ShowDate = function (props) {
  return (
    <div className="cf">

      <div>
        <article className="br3 hide-child relative ba b--black-20 center">
          <div className="avenir fw4 tc bb b--black-20 bg-black-40 white pa3">Game Date: {props.currentGameDate}</div>
            <div className="pa2 db">
              {props.calendar}
            </div>

            <div className="pa2 bt b--black-20 bg-black-50 avenir fw4 tc">
            </div>
        </article>
      </div>
    </div>
  )
}

export default ShowDate
