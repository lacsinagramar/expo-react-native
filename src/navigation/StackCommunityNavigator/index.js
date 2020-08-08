import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { headerCenter } from '~/utils/options'

import FeedScreen from '~/containers/Community/Feed'
import MembersScreen from '~/containers/Community/Members'
import PostScreen from '~/containers/Post'
import TrainerChatScreen from '~/containers/TrainerChat'
import TrainerProfileScreen from '~/containers/TrainerProfile'
import ProfileScreen from '~/containers/Profile'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()

const TopTabCommunityNavigator = () => (
  <Tab.Navigator initialRouteName="FeedNavigator">
    <Tab.Screen component={FeedScreen} name="Feed" />
    <Tab.Screen component={MembersScreen} name="Members" />
  </Tab.Navigator>
)

const StackCommunityNavigator = () => (
  <Stack.Navigator
    name="CommunityNavigator"
    screenOptions={headerCenter}
  >
    <Stack.Screen
      component={TopTabCommunityNavigator}
      name="CommunityNavigator"
    />
    <Stack.Screen component={PostScreen} name="Post" />
    <Stack.Screen
      component={TrainerChatScreen}
      name="TrainerChat"
    />
    <Stack.Screen
      component={TrainerProfileScreen}
      name="TrainerProfile"
    />
    <Stack.Screen component={ProfileScreen} name="Profile" />
  </Stack.Navigator>
)

StackCommunityNavigator.propTypes = {}

export default StackCommunityNavigator
