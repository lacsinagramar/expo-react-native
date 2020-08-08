import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const PostScreen = () => (
  <View
    style={{
      position: 'absolute',
      top: 0
    }}
  >
    <Text>I am PostScreen</Text>
  </View>
)
const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

PostScreen.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostScreen)
