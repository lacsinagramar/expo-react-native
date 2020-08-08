import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native'

const FeedScreen = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}
    >
      <Text>I am FeedScreen</Text>
      <Button
        title="Post"
        onPress={() => navigation.push('Post')}
      />
      <Button
        title="TrainerChat"
        onPress={() => navigation.navigate('TrainerChat')}
      />
      <Button
        title="TrainerProfile"
        onPress={() => navigation.navigate('TrainerProfile')}
      />
    </View>
  )
}

FeedScreen.propTypes = {
  navigation: PropTypes.object
}

export default FeedScreen
