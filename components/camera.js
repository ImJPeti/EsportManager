import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Constants from "expo-constants";
import callGoogleVisionAsync from "../helperFunction";
import ImagePickerComponent from "./ImagePickerComponent";


export default function Camera() {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <View style={styles.container}>
      <ImagePickerComponent onSubmit={callGoogleVisionAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
