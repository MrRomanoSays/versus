import React from 'react'

const Header = function (props) {
  return (
      <header className="avenir pt3 pl3">
        <div className="f2-l f3 tracked measure fw1">{props.headline}</div>
        <div className="f4-l f5 fw2">{props.subheadline}</div>
      </header>
  )
}

export default Header
