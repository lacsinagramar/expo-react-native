import { Alert } from 'react-native'

import HTTPStatus from 'http-status'
import _ from 'lodash'
import Reactotron from 'reactotron-react-native'
import { noop, path } from 'ramda'
import { Toast } from 'native-base'

const ERROR = 'error'
const INFO = 'info'
const SUCCESS = 'success'
const WARNING = 'warning'

const messages = {
  noInternetAlert:
    'You are not connected to the internet. Please try again later.',
  expiredSessionAlert: 'Session expired. Please login again.',
  noRecordAlert: 'Record does not exist'
}

export function show(message, type, options = {}) {
  switch (type) {
    case ERROR:
      Reactotron.error(message)

      break
    case WARNING:
      Reactotron.warn(message)

      break
    case SUCCESS:
    default:
      Reactotron.log(message)

      break
  }

  Toast.show({
    ...options,
    text: message,
    duration: 5000
  })
}

export function showSuccess(message, title, options) {
  show(message, SUCCESS, options)
}

function parseErrors(errors) {
  const parsedErrors = []
  const keys = Object.keys(errors)

  keys.forEach(key => {
    parsedErrors.push(`${key}: ${errors[key].join(' ')}`)
  })

  return parsedErrors.join('\n')
}

export function parseError(error) {
  if (error) {
    if (error.errors && _.isObject(error.errors))
      return parseErrors(error.errors)
    if (error.response) return parseError(error.response)
    if (error.data) return parseError(error.data)
    if (error.error) return parseError(error.error)
    if (error.err) return parseError(error.err)
    if (error.message) return parseError(error.message)
    if (typeof error === 'string') return error
  }

  return 'An unknown error has occurred. Please contact our tech support team.'
}

export function showError(message, title, options) {
  show(parseError(message), ERROR, options)
}

export function showWarning(message, title, options) {
  show(message, WARNING, options)
}

export function showInfo(message, title, options) {
  show(message, INFO, options)
}

export function showAlert(message, title) {
  Alert.alert(title, message)
}

export function showConfirmation(
  message,
  title = 'Confirm Action',
  confirmCallback = noop,
  cancelCallback = noop,
  confirmText = 'OK',
  cancelText = 'Cancel'
) {
  const cancel = {
    text: cancelText,
    onPress: cancelCallback
  }
  const confirm = {
    text: confirmText,
    onPress: confirmCallback
  }

  Alert.alert(title, message, [cancel, confirm])
}

export function defaultErrorHandler(logout = noop, err) {
  const isUnauthorized =
    path(['response', 'status'], err) === HTTPStatus.UNAUTHORIZED
  const isNotFound =
    path(['response', 'status'], err) === HTTPStatus.NOT_FOUND
  const networkError = err.message === 'Network Error'

  if (networkError) return showAlert(messages.noInternetAlert)

  if (isUnauthorized) {
    showError(messages.expiredSessionAlert)
    logout()
  } else if (isNotFound) {
    showError(messages.noRecordAlert)
  } else {
    showError(err)
  }

  return err
}
