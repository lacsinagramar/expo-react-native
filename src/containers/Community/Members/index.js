import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native'

const MembersScreen = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}
    >
      <Text>I am MembersScreen</Text>
      <Button
        title="TrainerChat"
        onPress={() => navigation.navigate('TrainerChat')}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

MembersScreen.propTypes = {
  navigation: PropTypes.object
}

export default MembersScreen
