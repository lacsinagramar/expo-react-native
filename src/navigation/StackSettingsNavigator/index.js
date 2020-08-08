import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { headerCenter } from '~/utils/options'

import SettingsScreen from '~/containers/Settings'

const Stack = createStackNavigator()

const StackSettingsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Settings"
    screenOptions={headerCenter}
  >
    <Stack.Screen component={SettingsScreen} name="Settings" />
  </Stack.Navigator>
)

StackSettingsNavigator.propTypes = {}

export default StackSettingsNavigator
