import { createActions } from 'redux-actions'

import ErrorHandler from '~/utils/errorHandler'

import { GET_SEGMENTS, RESULT_GET_SEGMENTS } from './constants'

const ReduxActions = createActions(
  {},
  GET_SEGMENTS,
  RESULT_GET_SEGMENTS
)

const { getSegments, resultGetSegments } = {
  getSegments:
    ReduxActions['app/home/timerSettings/getSegments'],
  resultGetSegments:
    ReduxActions['app/home/timerSettings/resultGetSegments']
}

const fetchSegmentsThunk = () => async dispatch => {
  try {
    dispatch(getSegments())
    dispatch(resultGetSegments([]))
  } catch (error) {
    const err = await ErrorHandler(error)
    dispatch(resultGetSegments(new Error(err)))
  }
}

export { fetchSegmentsThunk as getSegments }
