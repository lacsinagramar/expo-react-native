import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { headerCenter } from '~/utils/options'

import TimerScreen from '~/containers/Home'
import TimerSettingsScreen from '~/containers/Home/TimerSettings'
import ProfileScreen from '~/containers/Profile'
import Ionicon from '~/components/Ionicon'

const Stack = createStackNavigator()

const StackHomeNavigator = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator
      initialRouteName="Timer"
      screenOptions={headerCenter}
    >
      <Stack.Screen
        component={TimerScreen}
        name="Timer"
        options={{
          headerRight: () => (
            <ProfileIcon navigation={navigation} />
          )
        }}
      />
      <Stack.Screen
        component={TimerSettingsScreen}
        name="TimerSettings"
      />

      <Stack.Screen component={ProfileScreen} name="Profile" />
    </Stack.Navigator>
  )
}

StackHomeNavigator.propTypes = {}

const ProfileIcon = ({ navigation }) => (
  <Ionicon
    name="menu"
    style={{ marginRight: 20 }}
    onPress={() => navigation.navigate('Profile')}
  />
)

ProfileIcon.propTypes = {
  navigation: PropTypes.object
}

export default StackHomeNavigator
