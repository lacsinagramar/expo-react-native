import React from 'react'
import { DrawerItem } from '@react-navigation/drawer'
import { connect } from 'react-redux'
import { compose } from 'ramda'

import PropTypes from 'prop-types'

import { logout } from '~/containers/Auth/actions'

function LogoutItem(props) {
  const { logout } = props

  return <DrawerItem label="Logout" onPress={logout} />
}

LogoutItem.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

const withConnect = connect(null, mapDispatchToProps)

export default compose(withConnect)(LogoutItem)
