import React from 'react'

const BodyText = function (props) {
  return (
    <div>
      <div className="fl w-100 pv1 pl4 pr4">
          <div className="h-copy">
            <p>{props.text}</p>
          </div>
      </div>
    </div>
  )
}

export default BodyText
