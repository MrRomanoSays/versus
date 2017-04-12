import React from 'react'

const TextField = function (props) {

  const width = props.width ? `w-${props.width}` : 'w-100'

  return (
  <div>
      <label HTMLfor="name" className="f6 b db mb">{props.label}{' '}{props.optional && <span className="normal black-60">(optional)</span>}</label>
      <input id={props.label} className={`input-reset ba b--black-20 pa2 mb2 db ${width}`} type="text" aria-describedby="name-desc"
      value={props.value}
      onChange={props.onChange}
      />
      <small id="name-desc" className="f6 black-60 db mb2">{props.help}</small>
  </div>
  )
}

TextField.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  help: React.PropTypes.func.isRequired,
  optional: React.PropTypes.bool,
  width: React.PropTypes.string
}

export default TextField
