import React from 'react'
import { map } from 'ramda'




const BodyText = function (props) {

  const itemFormatter = function (item) {
    return (
      <li className="list pa1" key={item}>{item}</li>
    )
  }

  const listFormatter = function (listArray) {
    return (
          <ul className="list pl0 fl lh-copy w-100 w-33-ns" key={listArray[0]}>
          <b className="db f5 ml2">{listArray[0]}</b>
          <span className="bl bb br b--black-10 f5 db pa2 ma2">
            {map(itemFormatter, listArray[1])}</span>
          </ul>
        )
    }

  return (
    <div>
      <div className="fl w-100 pv1">
          <div className="avenir lh-copy">
            <div>{props.text}</div>
            <div>{props.list ? map(listFormatter, props.list) : null}</div>
          </div>
      </div>
    </div>
  )
}

export default BodyText
