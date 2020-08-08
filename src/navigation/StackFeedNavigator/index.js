import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { noHeader } from '~/utils/options'

import FeedScreen from '~/containers/Community/Feed'

const Stack = createStackNavigator()

const StackFeedNavigator = () => (
  <Stack.Navigator
    initialRouteName="Feed"
    screenOptions={noHeader}
  >
    <Stack.Screen component={FeedScreen} name="Feed" />
  </Stack.Navigator>
)

StackFeedNavigator.propTypes = {}

export default StackFeedNavigator
