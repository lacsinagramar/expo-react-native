import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PropTypes from 'prop-types'

import BottomTabNavigator from '~/navigation/BottomTabNavigator'

const Stack = createStackNavigator()

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen component={BottomTabNavigator} name="Root" />
  </Stack.Navigator>
)

StackNavigator.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func
  }).isRequired
}

export default StackNavigator
