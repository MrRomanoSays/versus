import React from 'react'

import Auth0Lock from 'auth0-lock'

const lock = new Auth0Lock(
  process.env.REACT_APP_AUTH0_CLIENTID,
  process.env.REACT_APP_AUTH0_DOMAIN
)

export const lockReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_LOCK':
      return action.payload
    default:
      return state
  }
}

// reducer
export const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return action.payload
    case 'CLEAR_AUTH':
      return null
    default:
      return state
  }
}

// listener
export const authListener = dispatch => {
  dispatch({ type: 'SET_LOCK', payload: lock })

  lock.on('authenticated', authResult => {
    dispatch({ type: 'SET_AUTH', payload: authResult })
    lock.getUserInfo(authResult.accessToken, (err, profile) => {
      if (err) return console.log(err.message)
      dispatch({ type: 'SET_USER', payload: profile })
    })
  })
}

// component
export const AuthComponent = props => {
  return <div>AuthComponent</div>
}
