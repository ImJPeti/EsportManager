import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Camera from './components/camera.js';
import * as React from "react";
import NavBar from './components/navBar.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/*  <Camera />*/}
      <StatusBar style="auto" />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262338",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
