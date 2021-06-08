import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Button,
} from "react-native";

const CIRCLE_SIZE = 100;

export const Welcome = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = (toValue) =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 3000,
      useNativeDriver: false,
    });
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(1);
  const onPress = () => {
    setIndex(index === 1 ? 0 : 1);
    setShow(index === 1 ? 1 : 0);
    animation(index === 1 ? 0 : 1).start();
  };

  const inputRange = [0, 0.001, 0.5, 0.5001, 1];
  const containerBackground = animatedValue.interpolate({
    inputRange,
    outputRange: ["#444", "#444", "#444", "#daa520", "#daa520"],
  });

  const circleBackground = animatedValue.interpolate({
    inputRange,
    outputRange: ["#daa520", "#daa520", "#daa520", "#444", "#444"],
  });

  const displayLogo = animatedValue.interpolate({
    inputRange,
    outputRange: [0, 0, 0, 1, 1],
  });

  const displayMenu = animatedValue.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0, 0],
  });

  const Logo = () => {
    return (
      <Animated.View style={[styles.logoContainer, {display: displayLogo}]}>
        <Image source={require("../assets/stackingXO.png")} />
        <Image source={require("../assets/brushline.png")} />
        <Image source={require("../assets/tictactoe.png")} />
      </Animated.View>
    );
  };

  const Menu = () => {
    return (
      <Animated.View style={[styles.menuContainer, {display: displayMenu}]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Game")}
        >
          <Text style={styles.buttonTxt}>Play Against A.I.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Game")}
        >
          <Text style={styles.buttonTxt}>Free Play</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styles.circleContainer,
          { backgroundColor: containerBackground },
        ]}
      >

          <Logo />
          <Menu />
        

        <Animated.View
          style={[
            styles.circle,
            {
              backgroundColor: circleBackground,
              transform: [
                {
                  perspective: 400,
                },
                {
                  rotateY: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ["0deg", "-90deg", "-180deg"],
                  }),
                },
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 8, 1],
                  }),
                },
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ["0%", "50%", "0%"],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity onPress={onPress}>
            <View style={[styles.circle, styles.circleButton]}>
              <SimpleLineIcons name="power" size={40} color={"white"} />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  circleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 8,
    paddingBottom: 100,
    backgroundColor: "#444",
  },
  circle: {
    backgroundColor: "#daa520",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
  circleButton: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
  },
  button: {
    backgroundColor: "#444",
    borderRadius: 20,
    padding: 20,
    width: "50%",
    alignItems: "center",
    marginTop: 50,
  },
  buttonTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginHorizontal: "auto",
  },
});
