import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer";
import { Text } from "react-native-elements";
import {Feather} from '@expo/vector-icons'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log(state);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Spacer>
        <Text h1>Your Tracks</Text>
      </Spacer>
     <Spacer>
     <FlatList
     showsVerticalScrollIndicator={false}
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetail", { _id: item._id });
              }}
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
     </Spacer>
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = {
  
    headerShown: false,
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1
    }
});

export default TrackListScreen;
