import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import { Cup } from "./Cup";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  PanResponder,
  SafeAreaView,
} from "react-native";

const gameMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let gameLayout = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const Game = ({ navigation }) => {
  const [gameStage, setGameStage] = useState(gameMatrix);
  const [cellSizes, setCellsizes] = useState(gameLayout);
  const imgSizes = [5,1,3,2,4];
  const containerRef = useRef(null);
  const cell_0_0 = useRef(null);
  const cell_0_1 = useRef(null);
  const cell_0_2 = useRef(null);
  const cell_1_0 = useRef(null);
  const cell_1_1 = useRef(null);
  const cell_1_2 = useRef(null);
  const cell_2_0 = useRef(null);
  const cell_2_1 = useRef(null);
  const cell_2_2 = useRef(null);
  const allCells = [
    [cell_0_0, cell_0_1, cell_0_2],
    [cell_1_0, cell_1_1, cell_1_2],
    [cell_2_0, cell_2_1, cell_2_2],
  ];

  const generateMap = (mapData) => {
    const mapJsx = [];
    for (let i = 0; i < mapData.length; i++) {
      const row = mapData[i];
      const rowJsx = [];
      for (let j = 0; j < row.length; j++) {
        rowJsx.push(
          <TouchableOpacity
            style={styles.cell}
            key={`cell_${i}_${j}`}
            ref={allCells[i][j]}
          >
            <Text style={styles.cellText}>{mapData[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      mapJsx.push(
        <View style={styles.row} key={`row_${i}`}>
          {rowJsx}
        </View>
      );
    }
    tmp = mapJsx;
    return mapJsx;
  };

  function fillGameLayout() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (allCells[i][j].current && containerRef.current) {
          allCells[i][j].current.measureLayout(
            containerRef.current,
            (left, top, width, height) => {
              gameLayout[i][j] = { left, top, width, height };
              setCellsizes(gameLayout)
              console.log(cellSizes);
            }
          );
        }
      }
    }
  }

  useEffect(() => {
    fillGameLayout();
    // runOnUI(() => {
    //   "worklet":fillGameLayout()
    // })
  });

  return (
    <SafeAreaView style={styles.container} ref={containerRef}>
      <StatusBar style="auto" hidden />
      <View style={styles.topUser}>
        {
          imgSizes.map(size =>
          <Cup
            color="red"
            key={"red",size}
            size={size}
            gameMatrix={gameStage}
            cellSizes={cellSizes}
          />)
        }
        
        <Text>User 1</Text>
      </View>
      <View style={styles.game}>
        <View style={styles.vertical}>
          <Image
            style={[styles.eggs, { marginRight: 35 }]}
            source={require("../assets/brushes/left.png")}
          />
          <Image
            style={[styles.eggs, { marginLeft: 35 }]}
            source={require("../assets/brushes/right.png")}
          />
        </View>

        <View style={styles.horizontal}>
          <Image
            style={[styles.eggs, { marginBottom: 45 }]}
            source={require("../assets/brushes/top.png")}
          />
          <Image
            style={[styles.eggs, { marginTop: 45 }]}
            source={require("../assets/brushes/bottom.png")}
          />
        </View>

        <View>{generateMap(gameStage)}</View>
      </View>

      <View style={styles.bottomUser}>
      {
          imgSizes.map(size =>
          <Cup
            color="blue"
            size={size}
            key={"blue",size}
            gameMatrix={gameStage}
            gameLayout={gameLayout}
          />)
        }
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
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  cellText: {
    fontSize: 28,
    fontWeight: "bold",
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
