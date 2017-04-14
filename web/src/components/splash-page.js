import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const SplashPage = function (props) {
  return (
<div>

  <div className="cover dt w-100 vh-100 bg-center" style={{backgroundImage: `url(${props.backgroundImage})`}}>

  <div className="tc dtc v-btm pb6">
    <div className="bg-black-80 f1 f1-l fw2 dark-red lh-title athelas ttu tracked i pt1">{props.title}</div>
    <div className="bg-black-80 fw2 f5 white-80 mb4 avenir pt1 pb3 pl3 pr3">{props.subheadline}</div>

    {props.auth ?
      <div>
        <a className="f6 no-underline dim tc white ba b--dark-red pa3 mr3"
            onClick={e => {
              props.dispatch({type: 'CLEAR_AUTH'})
              props.dispatch({type: 'CLEAR_USER'})
          }}>Log Out</a>
          <Link className="f6 no-underline grow o-90 tc bg-dark-red white ba b--white ph3 pa3 ml3" to="/dashboard">Go To Your Dashboard</Link>
      </div>
      : <a className="f6 no-underline grow tc bg-black o-80 near-white ba o-80 b--dark-red ph3 pa3"
          onClick={e => {
            props.lock.show()
        }}>Login</a>
    }

    </div>
    </div>
  </div>
  )
}

const connector = connect(state=>state)

export default connector(SplashPage)
