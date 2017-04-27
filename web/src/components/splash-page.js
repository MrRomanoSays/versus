import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const SplashPage = function (props) {
  return (
<div>

  <div className="cover dt w-100 vh-100 bg-center" style={{backgroundImage: `url(${props.backgroundImage})`}}>

  <div className="avenir tc dtc v-btm pb6">
    <div className="bg-black-80 f1 f1-l fw2 yellow lh-title athelas ttu tracked i pt1">{props.title}</div>
    <div className="bg-black-80 fw2 f5 white-80 mb4 pt1 pb3 pl3 pr3">{props.subheadline}</div>

    {props.auth ?
      <div className="avenir">


          <Link className="f6 no-underline grow o-90 tc bg-gold br2 black ba ph3 pa3 pointer" to="/dashboard"
            onClick=
              {e => {
                props.dispatch({type: 'SET_PLAYER_USER_ID', payload: props.user.user_id})
                props.dispatch({type: 'SET_PLAYER_USER_PICTURE', payload: props.user.picture})

              }}
            >Go To Your Dashboard</Link>
      </div>

      : <Link to="/" className="black f6 no-underline o-90 br2 link pointer tc ba ba ph3 pa3 bg-gold "
          onClick={e => {
            props.lock.show()
        }}>Login</Link>
    }

    </div>
    </div>
  </div>
  )
}

const connector = connect(state=>state)

export default connector(SplashPage)
