import { handleActions } from 'redux-actions'
import { GET_SEGMENTS, RESULT_GET_SEGMENTS } from './constants'

const initialState = {
  segments: [],
  segmentsLoader: false,
  segmentsFail: false,
  segmentsSuccess: false
}

const timeSegmentsReducer = handleActions(
  {
    [GET_SEGMENTS]: state => ({
      ...state,
      segmentsLoader: true,
      segmentsSuccess: false,
      segmentsFail: false
    }),
    [RESULT_GET_SEGMENTS]: {
      next: (state, action) => ({
        ...state,
        segments: action.payload,
        segmentsLoader: false,
        segmentsSuccess: true
      }),
      throw: (state, action) => ({
        ...state,
        segmentsFail: action.payload,
        segmentsLoader: false,
        segmentsSuccess: true
      })
    }
  },
  initialState
)

export default timeSegmentsReducer
