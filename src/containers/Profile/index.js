import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const ProfileScreen = () => (
  <View>
    <Text>I am ProfileScreen</Text>
  </View>
)
const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

ProfileScreen.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)
