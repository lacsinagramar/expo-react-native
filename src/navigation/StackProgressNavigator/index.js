import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { headerCenter } from '~/utils/options'

import ProgressScreen from '~/containers/Progress'
import NotesHistoryScreen from '~/containers/Progress/NotesHistory'

import Ionicon from '~/components/Ionicon'

const Stack = createStackNavigator()

const StackProgressNavigator = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      initialRouteName="Progress"
      screenOptions={headerCenter}
    >
      <Stack.Screen
        component={ProgressScreen}
        name="Progress"
        options={{
          headerRight: () => (
            <NotesHistoryIcon navigation={navigation} />
          )
        }}
      />

      <Stack.Screen
        component={NotesHistoryScreen}
        name="NotesHistory"
      />
    </Stack.Navigator>
  )
}

StackProgressNavigator.propTypes = {}

const NotesHistoryIcon = ({ navigation }) => (
  <Ionicon
    name="menu"
    style={{ marginRight: 20 }}
    onPress={() => navigation.navigate('NotesHistory')}
  />
)

NotesHistoryIcon.propTypes = {
  navigation: PropTypes.object
}

export default StackProgressNavigator
