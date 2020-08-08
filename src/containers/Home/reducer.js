import { handleActions } from 'redux-actions'
import {
  GET_POSTS,
  RESULT_GET_POSTS,
  CREATE_POST,
  RESULT_CREATE_POST
} from './constants'

const initialState = {
  user: [],
  userLoader: false,
  userFail: false,
  userSuccess: false
}

const homeReducer = handleActions(
  {
    [GET_POSTS]: state => ({
      ...state,
      userLoader: true,
      userSuccess: false,
      userFail: false
    }),
    [RESULT_GET_POSTS]: {
      next: (state, action) => ({
        ...state,
        user: action.payload,
        userLoader: false,
        userSuccess: true
      }),
      throw: (state, action) => ({
        ...state,
        userFail: action.payload,
        userLoader: false,
        userSuccess: true
      })
    },

    [CREATE_POST]: state => ({
      ...state,
      userLoader: true,
      userSuccess: false,
      userFail: false
    }),
    [RESULT_CREATE_POST]: {
      next: (state, action) => ({
        ...state,
        user: [...state.user, action.payload],
        userLoader: false,
        userSuccess: true
      }),
      throw: (state, action) => ({
        ...state,
        userFail: action.payload,
        userLoader: false,
        userSuccess: true
      })
    }
  },
  initialState
)

export default homeReducer
