/**
 * Created by guangqiang on 2017/12/1.
 */

import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {TabBar} from '../TabBarNavigator'
import Home2 from '../HomePage'
import Home3 from '../Terminal'
import Home4 from '../Order'

const RouteConfigs = {
  Home:{screen: TabBar},
  Home2: {
    screen: Home2,
    path:'app/Home2',
    navigationOptions: {
      title: '这是在RouteConfigs中设置的title',
      headerTitleStyle: {
        fontSize: 10
      }
    }
  },
  Home3: { screen: Home3 },
  Home4: { screen: Home4 },
}

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
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

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig)

export {Navigator}
