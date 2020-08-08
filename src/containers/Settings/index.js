import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'

import { logout } from '~/containers/Auth/actions'

const SettingsScreen = ({ logout }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}
    >
      <Text>I am SettingsScreen</Text>
      <Button title="logout" onPress={logout} />
    </View>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

SettingsScreen.propTypes = {
  logout: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen)
