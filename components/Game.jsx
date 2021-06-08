import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
} from "react-native";

const gameMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const generateMap = (mapData) => {
  const mapJsx = [];
  for (let i = 0; i < mapData.length; i++) {
    const row = mapData[i];
    const rowJsx = [];
    // for(let j = 0; j < row.length; j++) {
    //   rowJsx
    // }
  }
};

export const Game = ({ navigation }) => {
  const [gameStage, setGameStage] = useState(gameMatrix);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" hidden />
      <View style={styles.topUser}>
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size5.png")}
        />
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size4.png")}
        />
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size3.png")}
        />
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size2.png")}
        />
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size1.png")}
        />
        <Text>User 1</Text>
      </View>

      <View style={styles.game}>
        <View style={styles.vertical}>
          <Image
            style={[styles.eggs, {marginRight: 35}]}
            source={require("../assets/brushes/left.png")}
          />
          <Image
            style={[styles.eggs, {marginLeft: 35}]}
            source={require("../assets/brushes/right.png")}
          />
        </View>

        <View style={styles.horizontal}>
          <Image
            style={[styles.eggs, {marginBottom: 45}]}
            source={require("../assets/brushes/top.png")}
          />
          <Image
            style={[styles.eggs, {marginTop: 45}]}
            source={require("../assets/brushes/bottom.png")}
          />
        </View>
      </View>

      <View style={styles.bottomUser}>
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size5.png")}
        />
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size4.png")}
        />
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size3.png")}
        />
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size2.png")}
        />
        <Image
          style={styles.eggs}
          source={require("../assets/cups/size1.png")}
        />
        <Text>User 1</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#daa520",
  },
  game: {
    zIndex: -1,
    backgroundColor: "transparent",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vertical: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horizontal: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topUser: {
    flexDirection: "row",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomUser: {
    flexDirection: "row",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  eggs: {
    marginBottom: 0,
  },
});
