/* eslint-disable react/prop-types */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeNavigator from '~/navigation/StackHomeNavigator'
import ProgressNavigator from '~/navigation/StackProgressNavigator'
import CommunityNavigator from '~/navigation/StackCommunityNavigator'
import SettingsNavigator from '~/navigation/StackSettingsNavigator'

import TabBarIcon from '~/components/TabBarIcon'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="HomeNavigator"
    screenOptions={{
      headerTitleAlign: 'center'
    }}
    tabBarOptions={{
      keyboardHidesTabBar: true
    }}
  >
    <BottomTab.Screen
      component={HomeNavigator}
      name="HomeNavigator"
      options={{
        title: 'Timer',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-book" />
        )
      }}
    />
    <BottomTab.Screen
      component={ProgressNavigator}
      name="ProgressNavigator"
      options={{
        title: 'Progress',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-book" />
        )
      }}
    />
    <BottomTab.Screen
      component={CommunityNavigator}
      name="CommunityNavigator"
      options={{
        title: 'Community',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-book" />
        )
      }}
    />
    <BottomTab.Screen
      component={SettingsNavigator}
      name="SettingsNavigator"
      options={{
        title: 'Settings',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-book" />
        )
      }}
    />
  </BottomTab.Navigator>
)

export default BottomTabNavigator
