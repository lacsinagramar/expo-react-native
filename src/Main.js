import React, { useRef } from 'react'
import {
  Platform,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import PropTypes from 'prop-types'

import RootNavigator from './navigation/RootNavigator'
import useLinking from './navigation/useLinking'
import useLoadResourcesAsync from './useLoadResourcesAsync'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

function Main(props) {
  const { skipLoadingScreen } = props
  const containerRef = useRef()
  const { getInitialState } = useLinking(containerRef)
  const {
    initialNavigationState,
    isLoadingComplete
  } = useLoadResourcesAsync(getInitialState)

  if (!isLoadingComplete && !skipLoadingScreen) return null

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <NavigationContainer
        ref={containerRef}
        initialState={initialNavigationState}
      >
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </View>
  )
}

Main.propTypes = {
  skipLoadingScreen: PropTypes.bool
}

export default Main
