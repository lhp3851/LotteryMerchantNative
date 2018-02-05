/**
 * Created by guangqiang on 2017/12/1.
 */


import React from 'react'
import {Platform} from 'react-native'
import {TabNavigator} from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../HomePage'
import Terminal from '../Terminal'
import Sales from '../Sales'
import Order from '../Order'
import Setting from '../Setting'
import {RootNavigator} from '../Commen/Navigatior'

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页',
      title:'首页',
      // tabBarIcon: ({ focused, tintColor }) => (
      //   <Ionicons
      //     name={focused ? 'ios-home' : 'ios-home-outline'}
      //     size={26}
      //     style={{ color: tintColor }}/>
      // )
    }),
  },
  Terminal: {
    screen: Terminal,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '终端',
      title:'终端',
      // tabBarIcon: ({ focused, tintColor }) => (
      //   <Ionicons
      //     // name={focused ? 'ios-people' : 'ios-people-outline'}
      //     size={26}
      //     style={{ color: tintColor }}/>
      // )
    }),
  },
  Sales: {
    screen: Sales,
    navigationOptions: ({ navigation }) => ({
      title:'销售',
      tabBarLabel: '销售',
      // tabBarIcon: ({ focused, tintColor }) => (
      //   <Ionicons
      //     // name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      //     size={26}
      //     style={{ color: tintColor }}/>
      // )
    }),
  },
  Order: {
    screen: Order,
    navigationOptions: ({ navigation }) => ({
      title:'订单',
      tabBarLabel: '订单',
      // tabBarIcon: ({ focused, tintColor }) => (
      //   <Ionicons
      //     // name={focused ? 'ios-people' : 'ios-people-outline'}
      //     size={26}
      //     style={{ color: tintColor }}/>
      // )
    }),
  },
  Setting: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      title:'我的',
      tabBarLabel: '我的',
      // tabBarIcon: ({ focused, tintColor }) => (
      //   <Ionicons
      //     // name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      //     size={26}
      //     style={{ color: tintColor }}/>
      // )
    }),
  }
}

const TabNavigatorConfigs = {
  initialRouteName: 'Home',
  lazy: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'
  }
}

const TabBar = TabNavigator(RouteConfigs, TabNavigatorConfigs)

export {TabBar}
