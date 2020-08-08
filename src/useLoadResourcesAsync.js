import { useEffect, useState } from 'react'
import { SplashScreen } from 'expo'
import { loadAsync } from 'expo-font'

import { Ionicons } from '@expo/vector-icons'

const roboto = require('native-base/Fonts/Roboto.ttf')
const robotoMedium = require('native-base/Fonts/Roboto_medium.ttf')
const spaceMono = require('./assets/fonts/SpaceMono-Regular.ttf')

const useLoadResourcesAsync = getInitialState => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const [
    initialNavigationState,
    setInitialNavigationState
  ] = useState()

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide()

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState())

        await loadAsync({
          Roboto: roboto,
          Roboto_medium: robotoMedium,
          ...Ionicons.font,
          'space-mono': spaceMono
        })
      } catch (e) {
        console.error(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hide()
      }
    }

    loadResourcesAndDataAsync()
  }, [
    getInitialState,
    initialNavigationState,
    isLoadingComplete
  ])

  return {
    isLoadingComplete,
    initialNavigationState
  }
}

export default useLoadResourcesAsync
