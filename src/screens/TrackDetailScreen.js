import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polygon, Polyline } from "react-native-maps";
import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";
import TrackListScreen from "./TrackListScreen";
const TrackDetailScreen=({navigation})=>{
    const {state}=useContext(TrackContext)
    const _id=navigation.getParam('_id')
    const track= state.find(t=> t._id==_id )
    const initialCoords=track.locations[0].coords
    return(
        <View style={styles.container}>
          <Spacer>
          <Text h1>{track.name}</Text>
          </Spacer>
      <Spacer>
      <MapView  style={styles.map}
            initialRegion={{
                ...initialCoords,
                longitudeDelta:0.01,
                latitudeDelta:0.01,
                
            }}
            
            >
                <Polyline strokeWidth={4} strokeColor="#4FBDBA" coordinates={track.locations.map(loc=>loc.coords)}/>
            </MapView>
      </Spacer>
        </View>
    )
}
TrackDetailScreen.navigationOptions={
    title: 'Track Detail',

    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:20
      }

}
const styles=StyleSheet.create({
map:{
    height:300
},
container:{
    flex:1,
    backgroundColor:'white'
}
});

export default TrackDetailScreen;