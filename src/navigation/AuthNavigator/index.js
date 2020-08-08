import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { noHeader } from '~/utils/options'

import LoginScreen from '~/containers/Auth/Login'
import RegisterScreen from '~/containers/Auth/Register'

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={noHeader}
  >
    <Stack.Screen component={LoginScreen} name="Login" />
    <Stack.Screen component={RegisterScreen} name="Register" />
  </Stack.Navigator>
)

export default AuthNavigator
