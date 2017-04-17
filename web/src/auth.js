import React from 'react'

import Auth0Lock from 'auth0-lock'

var options = {
  languageDictionary: {
    title: "Welcome to VS!",
    loginSubmitLabel: "Ready? Set. Login!",
    signUpSubmitLabel: "Ready? Set. Sign Up!"
  },
  theme: {
    logo: 'http://saratov-room.ru/uploads/saratov/2017/04/football-player-1149178_960_720.jpg',
    labeledSubmitButton: "Ready. Set. Go!",
    foregroundColor: "#000000",
    primaryColor: '#FFD700',
    icon: 'http://saratov-room.ru/uploads/saratov/2017/04/football-player-1149178_960_720.jpg'
  },
  auth: {
    redirectUrl: 'http://localhost:8000/',
    redirect: true,
    responseType: "token"
  },
  additionalSignUpFields: [{
    name: "age",
    placeholder: "How old are you?",
    validator: function(age) {
      return {
         valid: age >= 18,
         hint: "Sorry.  To help ensure player safety we require all users to be at least 18 years old."
      };
    }
  }]
}

const lock = new Auth0Lock(
  process.env.REACT_APP_AUTH0_CLIENTID,
  process.env.REACT_APP_AUTH0_DOMAIN,
  options
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
