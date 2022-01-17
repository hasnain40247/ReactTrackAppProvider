import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import { Provider as AuthProvider} from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider} from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import {Feather} from '@expo/vector-icons'

const trackListFlow=createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
      },)

trackListFlow.navigationOptions={
 
  tabBarLabel: "Tracks",



  tabBarIcon: <Feather name="map" size={24} color="black"/>  ,
}
    
const switchNavigator=createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup:SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  },{
  tabBarOptions: {
    activeTintColor: "#4FBDBA",
    labelStyle: {
      fontSize: 16,
      margin: 0,
      padding: 0,
    },
}}
  )
})
const App=createAppContainer(switchNavigator);

export default()=>{
  return (
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
      <App ref={(navigator)=>{
        setNavigator(navigator);
      }}/>
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  )
}