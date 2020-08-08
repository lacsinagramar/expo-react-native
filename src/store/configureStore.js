import { AsyncStorage } from 'react-native'

import { createStore, compose, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'

import Reactotron from '../logger'
import rootReducer from './reducers'

const persistReducerConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(
  persistReducerConfig,
  rootReducer
)

export default function configureStore(initialState) {
  const middleware = [thunk]
  // eslint-disable-next-line no-undef
  const composedMiddleware = __DEV__
    ? compose(
        applyMiddleware(...middleware),
        Reactotron.createEnhancer()
      )
    : applyMiddleware(...middleware)

  // eslint-disable-next-line no-undef
  if (__DEV__) Reactotron.connect()

  const store = createStore(
    persistedReducer,
    initialState,
    composedMiddleware
  )

  const persistor = persistStore(store)

  return { store, persistor }
}
