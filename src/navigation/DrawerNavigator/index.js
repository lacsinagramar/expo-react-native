import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Sidebar from '~/components/Sidebar'
import StackNavigator from '~/navigation/StackNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={Sidebar}>
    <Drawer.Screen component={StackNavigator} name="Drawer" />
  </Drawer.Navigator>
)

export default DrawerNavigator
