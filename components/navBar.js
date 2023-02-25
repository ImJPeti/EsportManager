import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewComponent,
  Platform,
  Animated,
} from "react-native";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";


export default function NavBar() {
  return (
    <View style={styles.View}>
      <View style={styles.bottomnav}>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate("MyProfile")}
        >
          <Ionicons
            name="grid-outline"
            size={30}
            color="#A18DF9"
            style={styles.TouchableOpacity}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cab")}>
          <Ionicons
            name="trophy-outline"
            size={30}
            color="#A18DF9"
            style={styles.TouchableOpacity}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate("Chat")}
        >
          <Ionicons name="skull-outline" size={30} color="#A18DF9" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate("Chat")}
        >
          <Ionicons name="business-outline" size={30} color="#A18DF9" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.navigate("Chat")}
        >
          <Ionicons name="newspaper-outline" size={30} color="#A18DF9" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  TouchableOpacity: {
    marginTop: 7,
  },

  View: {
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    padding: 5,
    backgroundColor: "#14142A",
    height: "8%",
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomColor: "black",
    borderTopColor: "black",
    width: "90%",
    borderRadius: 20,
    marginBottom: "5%",
    shadowColor: "#14142A",
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
  },

  SafeAreaView: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },

  bottomnav: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "85%",
  },
});
