import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { Button } from 'native-base'

import { compose } from 'redux'

import styles from './styles'

const HomeScreen = ({ navigation }) => {
  const [isTimerStarted, setIsTimerStarted] = useState(false)

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View style={styles.getStartedContainer}>
          {!isTimerStarted ? (
            <Text>Timer</Text>
          ) : (
            <Text>Timer Started ..</Text>
          )}

          <Button
            style={{ marginTop: 20 }}
            block
            info
            onPress={() => {
              setIsTimerStarted(!isTimerStarted)
            }}
          >
            <Text>
              {!isTimerStarted ? 'START TIMER' : 'RESET'}
            </Text>
          </Button>

          <Button
            style={{ marginTop: 20 }}
            block
            info
            onPress={() => navigation.navigate('TimerSettings')}
          >
            <Text>GO TO TIMER SETTINGS</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    setOptions: PropTypes.func
  }).isRequired
}

const mapStateToProps = ({ home, segmentSettings }) => ({
  user: home?.user,
  segments: segmentSettings?.segments
})
const mapDispatchToProps = () => ({})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect, memo)(HomeScreen)
