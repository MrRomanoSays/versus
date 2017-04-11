import React from 'react'

const Grid5to1 = function (props) {
  return (
    <div className="avenir fw4">
      <div className={`fl w-100 w-20-ns tc pv3 bb b--black-10 ${props.age === props.cell1 && 'bg-washed-red'}`}
      onClick={e => props.handleChange(props.cell1)}
      >
        {props.cell1}
      </div>
      <div className={`fl w-100 w-20-ns tc pv3 bb b--black-10 ${props.age === props.cell2 && 'bg-washed-red'}`}
      onClick={e => props.handleChange(props.cell2)}
      >
        {props.cell2}
      </div>
      <div className={`fl w-100 w-20-ns tc pv3 bb b--black-10 ${props.age === props.cell3 && 'bg-washed-red'}`}
      onClick={e => props.handleChange(props.cell3)}
      >
        {props.cell3}
      </div>
      <div className={`fl w-100 w-20-ns tc pv3 bb b--black-10 ${props.age === props.cell4 && 'bg-washed-red'}`}
      onClick={e => props.handleChange(props.cell4)}
      >
        {props.cell4}
      </div>
      <div className={`fl w-100 w-20-ns tc pv3 bb b--black-10 ${props.age === props.cell5 && 'bg-washed-red'}`}
      onClick={e => props.handleChange(props.cell5)}
      >
        {props.cell5}
      </div>

    </div>
  )
}

export default Grid5to1
