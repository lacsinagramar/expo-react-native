import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getSegments } from './actions'

const TimerSettings = () => {
  return (
    <View>
      <Text>I am TimerSettings</Text>
    </View>
  )
}

const mapStateToProps = ({ segmentSettings }) => ({
  segments: segmentSettings?.segments
})

const mapDispatchToProps = dispatch => ({
  getSegments: props => dispatch(getSegments(props))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

TimerSettings.propTypes = {}

export default compose(withConnect, memo)(TimerSettings)
