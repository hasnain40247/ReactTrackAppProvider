// import "../mockLocation"
import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Accuracy } from "expo-location";
import Spacer from "../components/Spacer";
import { watchPositionAsync } from "expo-location";
import { requestForegroundPermissionsAsync } from "expo-location";
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from "../hooks/useLocation";
import { NavigationEvents, withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";
import {Feather} from '@expo/vector-icons'

const TrackCreateScreen = ({isFocused}) => {
const {state,addLocation}= useContext(LocationContext)
const callback=useCallback(
  (location)=>{
    addLocation(location,state.recording)
  },[state.recording]
  
)
const [err]=useLocation(isFocused || state.recording,callback)

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
  
          <Text h1>Create A Track</Text>
     
 
          <Map />

          {/* <NavigationEvents onWillBlur={()=>{console.log("LEAVING");}}/> */}
{err? <Text>Please enable location services</Text>:null}
<TrackForm/>
      </Spacer>
    </SafeAreaView>
  );
};

const styes = StyleSheet.create({});

TrackCreateScreen.navigationOptions={
  tabBarLabel: "Add Track",
  tabBarLabelStyle:{
    fontWeight: "bold",
    fontSize: 26
  },
  tabBarIcon: <Feather name="plus-circle" size={24} color="black" />
}
export default withNavigationFocus(TrackCreateScreen);
