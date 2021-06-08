import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Button
} from "react-native";

export const Game = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#daa520",
  },
});
