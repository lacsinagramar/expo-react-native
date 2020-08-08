import { createActions } from 'redux-actions'
import { call } from 'ramda'

import ErrorHandler from '~/utils/errorHandler'

import { LOGIN_REQUEST, LOGIN, LOGOUT } from './constants'

const ReduxActions = createActions(
  {},
  LOGIN_REQUEST,
  LOGIN,
  LOGOUT
)

const { login, loginRequest, logout } = {
  loginRequest: ReduxActions['app/auth/loginRequest'],
  login: ReduxActions['app/auth/login'],
  logout: ReduxActions['app/auth/logout']
}

const loginThunk = payload => async dispatch => {
  try {
    dispatch(call(loginRequest))
    /**
     * Post login API call here
     */

    // We're passing payload for now, should be data from API call above
    const { email_address: name } = payload
    dispatch(call(login, { name, id: name }))
  } catch (error) {
    const err = await ErrorHandler(error)
    console.error(err)
  }
}

const logoutThunk = () => async dispatch => {
  try {
    dispatch(call(logout))
  } catch (error) {
    const err = await ErrorHandler(error)
    console.error(err)
  }
}

export { loginThunk as login, logoutThunk as logout }
