import { Ionicons } from '@expo/vector-icons'
import * as React from 'react'

import PropTypes from 'prop-types'

import { $blue, $grey } from '~/utils/color'

export default function TabBarIcon(props) {
  const { focused, name } = props

  return (
    <Ionicons
      color={focused ? $blue : $grey}
      name={name}
      size={30}
      style={{ marginBottom: -3 }}
    />
  )
}

TabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}
