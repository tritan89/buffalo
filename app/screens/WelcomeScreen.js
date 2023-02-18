import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/buffalo_background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Buffalo</Text>
        <StatusBar style="auto" />
      </ImageBackground>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    textAlignmentsVertical: "top",
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButton: {
    flex: 0.1,
    backgroundColor: "green",
    justifyContent: "flex-end",
  },
  registerButton: {
    flex: 0.1,
    backgroundColor: "red",
    justifyContent: "flex-end",
  },
});
