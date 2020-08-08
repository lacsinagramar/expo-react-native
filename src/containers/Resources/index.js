import { Ionicons } from '@expo/vector-icons'
import { openBrowserAsync } from 'expo-web-browser'

import React from 'react'
import { Text, View } from 'react-native'
import {
  RectButton,
  ScrollView
} from 'react-native-gesture-handler'

import PropTypes from 'prop-types'
import styles from './styles'

export default function LinksScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => {
          openBrowserAsync('https://docs.expo.io')
        }}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => {
          openBrowserAsync('https://reactnavigation.org')
        }}
      />

      <OptionButton
        icon="ios-chatboxes"
        isLastOption
        label="Ask a question on the forums"
        onPress={() => {
          openBrowserAsync('https://forums.expo.io')
        }}
      />
    </ScrollView>
  )
}

function OptionButton({ icon, isLastOption, label, onPress }) {
  return (
    <RectButton
      onPress={onPress}
      style={[styles.option, isLastOption && styles.lastOption]}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons
            color="rgba(0,0,0,0.35)"
            name={icon}
            size={22}
          />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  )
}

OptionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  isLastOption: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func
}
