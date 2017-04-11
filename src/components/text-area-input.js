import React from 'react'

const TextInput = function (props) {
  return (
    <div className={props.width ? `w-${props.width}` : 'w-100'}>
      <label className="f6 b db mb2">{props.label}<span className="normal black-60 pl2">{props.optional && '(optional)'}</span></label>
      <small className="f6 black-60 db mb2 i">{props.help}</small>
      <textarea className="textarea-reset ba b--black-20 pa2 mb2 db w-100" rows={props.textInputRows ? `${props.textInputRows}` : '3'} type="text" placeholder={props.placeholder && `${props.placeholder}` } value={props.value} onChange={props.onChange} />

    </div>
  )
}

export default TextInput
