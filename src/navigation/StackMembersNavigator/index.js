import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { noHeader } from '~/utils/options'

import MembersScreen from '~/containers/Community/Members'

const Stack = createStackNavigator()

const StackMembersNavigator = () => (
  <Stack.Navigator
    initialRouteName="Members"
    screenOptions={noHeader}
  >
    <Stack.Screen component={MembersScreen} name="Members" />
  </Stack.Navigator>
)

StackMembersNavigator.propTypes = {}

export default StackMembersNavigator
