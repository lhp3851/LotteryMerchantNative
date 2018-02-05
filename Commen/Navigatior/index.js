import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from '../../HomePage'
import TerminalScreen from '../../Terminal'
import SalesScreen from '../../Sales'
import OrderScreen from '../../Order'
import SettingScreen from '../../Setting'

const RootConfig = {
  Home: {screen: HomeScreen},
  Terminal: {screen: TerminalScreen},
  Sales: {screen: SalesScreen},
  Order: {screen: OrderScreen},
  Setting: {screen: SettingScreen},
}

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
    title: '标题',
    headerTitleStyle: {fontSize: 18, color: 'red'},
    headerStyle: {height: 49},
  },
  paths: 'page/main',
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: "#ffffff"},
  transitionConfig: (() => ({

  })),
  onTransitionStart: (() => {
    console.log('页面跳转动画开始')

  }),
  onTransitionEnd: (() => {
    console.log('页面跳转动画结束')
  }),
}

const RootNavigator = StackNavigator(RootConfig,StackNavigatorConfig);

export default RootNavigator;
