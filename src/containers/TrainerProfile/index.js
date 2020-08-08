import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const TrainerProfileScreen = () => (
  <View>
    <Text>I am TrainerProfileScreen</Text>
  </View>
)
const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

TrainerProfileScreen.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerProfileScreen)
