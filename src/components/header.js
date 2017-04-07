import React from 'react'

const Header = function (props) {
  return (
      <header className="avenir pl1 pt3">
        <div className="f2-ns f3 tracked measure fw1 pl4">{props.headline}</div>
        <div className="f4-ns f5 fw2 pl4">{props.subheadline}</div>
      </header>
  )
}

export default Header
