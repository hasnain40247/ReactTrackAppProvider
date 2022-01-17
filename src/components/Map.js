import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MapView, { Circle, Polyline } from 'react-native-maps'
import {Context as LocationContext} from '../context/LocationContext'
const Map=()=>{
  const {state:{currentLocation,locations}}= useContext(LocationContext)
 if(!currentLocation){
     return <ActivityIndicator size="large" color="black" style={{marginTop:100}}/>
 }
    return(<MapView initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01

    }} 
    
    region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}
    
    style={styles.map}>
        <Circle center={currentLocation.coords} radius={30} strokeColor="#4FBDBA"
        
        fillColor="rgba(158,158,255,0.3)"
        />
<Polyline strokeWidth={4} strokeColor="#4FBDBA" coordinates={locations.map(loc=>loc.coords)} />
    </MapView>)
}

const styles=StyleSheet.create({
map:{
    height:300
}
})

export default Map;