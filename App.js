import React, {Component} from 'react'
import {View, Platform} from 'react-native'
import {Button} from 'react-native-elements'
import {StackNavigator} from 'react-navigation'
import {TabBar} from './TabBarNavigator'

const Index = ({ navigation }) => (
  <View style={{flex: 1, marginTop: 50}}>
    <Button
      buttonStyle={{marginVertical: 20}}
      title={'react-navigation导航组件的基本使用方式练习'}
      onPress={() => navigation.navigate('Demo1')}
    />
  </View>
)

const RouteConfigs = {
  Index: {
    screen: Index
  },
  Demo1: {
    screen: TabBar
  }
}

const StackNavigatorConfig = {
  headerMode: 'none',
  mode: Platform.OS === 'ios' ? 'modal' : 'card'
}

const MainScreen = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default MainScreen
