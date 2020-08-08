import { combineReducers } from 'redux'

import authReducer from '~/containers/Auth/reducer'
import homeReducer from '~/containers/Home/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer
})

export default rootReducer
