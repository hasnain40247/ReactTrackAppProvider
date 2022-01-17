import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Accuracy } from "expo-location";
import Spacer from "../components/Spacer";
import { watchPositionAsync } from "expo-location";
import { requestForegroundPermissionsAsync } from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let sub;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        sub = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
   
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) startWatching();
    else {
      if(sub){

        sub.remove();

      }
      sub=null
    }

    return () => {
      if (sub) {
        sub.remove();
      }
    };
  }, [
    shouldTrack,
    callback,

    // callback  never put this everytime rerenders and locations array is updated
  ]);

  return [err];
};
