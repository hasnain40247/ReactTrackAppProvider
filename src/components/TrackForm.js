import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import Spacer from "./Spacer";
const TrackForm = () => {

    const [saveTrack]=useSaveTrack()

  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  return (
    <>
      <Input
        value={name}
        placeholder="Enter name"
        onChangeText={(newName) => changeName(newName)}
      />
      {recording ? (
        <Button
          buttonStyle={{ backgroundColor: "#ee3e54" }}
          style={{ backgroundColor: "#ee3e54" }}
          title="Stop"
          onPress={stopRecording}
        />
      ) : (
        <Button
          buttonStyle={{ backgroundColor: "#93bc39" }}
          style={{ backgroundColor: "#93bc39" }}
          title="Start Recording"
          onPress={startRecording}
        />
      )}
      <Spacer></Spacer>
      {!recording && locations.length ? (
        <Button
          buttonStyle={{ backgroundColor: "#93bc39" }}
          style={{ backgroundColor: "#93bc39" }}
          title="Save Recording"
          onPress={saveTrack}
        />
      ) : null}

 
    </>
  );
};

export default TrackForm;
