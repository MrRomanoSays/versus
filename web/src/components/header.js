import React from 'react'

const Header = function (props) {
  return (
      <header className="avenir pt3">
        <div className="gold f4 tracked measure fw3">{props.headline}</div>
        <div className="athelas f5 fw1 i mt1 mb1">{props.subheadline}</div>
      </header>
  )
}

export default Header
