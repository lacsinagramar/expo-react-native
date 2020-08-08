import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import { compose } from 'ramda'

import { noHeader } from '~/utils/options'

import AuthNavigator from '~/navigation/AuthNavigator'
import MainNavigator from '~/navigation/BottomTabNavigator'

const Root = createStackNavigator()

const RootNavigator = ({ auth }) => (
  <Root.Navigator mode="modal" screenOptions={noHeader}>
    {auth.isLoggedIn ? (
      <Root.Screen component={MainNavigator} name="Main" />
    ) : (
      <Root.Screen component={AuthNavigator} name="Auth" />
    )}
  </Root.Navigator>
)

RootNavigator.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool
  }).isRequired
}

const mapStateToProps = ({ auth }) => ({
  auth
})

const withConnect = connect(mapStateToProps, null)

export default compose(withConnect)(RootNavigator)
