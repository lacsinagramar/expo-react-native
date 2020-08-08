import { handleActions } from 'redux-actions'
import { LOGIN_REQUEST, LOGIN, LOGOUT } from './constants'

const initialState = {
  session: {},
  isLoggedIn: false,
  loginLoader: false,
  loginSuccess: false,
  loginError: false
}

const authReducer = () => {
  return handleActions(
    {
      [LOGIN_REQUEST]: state => ({
        ...state,
        isLoggedIn: false,
        loginLoader: true,
        loginSuccess: false
      }),
      [LOGIN]: (state, action) => ({
        ...state,
        session: {
          ...state.session,
          ...action.payload
        },
        isLoggedIn: true,
        loginLoader: false,
        loginSuccess: true
      }),
      [LOGOUT]: state => ({
        ...state,
        ...initialState
      })
    },
    initialState
  )
}

export default authReducer()
