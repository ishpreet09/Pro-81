import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { TabNavigator } from './AppTabNavigator';
import SettingScreen from '../screens/settingsScreen';
import CustomSideBarMenu  from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
    },
    Setting:{
      screen : SettingScreen

    }
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
