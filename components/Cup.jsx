import React, { useState, useRef, forwardRef } from "react";
import { Animated, PanResponder, Text, Image, Dimensions } from "react-native";
import Size5 from "../assets/cups/size5.png";
import Size4 from "../assets/cups/size4.png";
import Size3 from "../assets/cups/size3.png";
import Size2 from "../assets/cups/size2.png";
import Size1 from "../assets/cups/size1.png";

function getImg(size) {
  if (size === 1) {
    return Size1;
  } else if (size === 2) {
    return Size2;
  } else if (size === 3) {
    return Size3;
  } else if (size === 4) {
    return Size4;
  } else {
    return Size4;
  }
}

const { height, width } = Dimensions.get("window");

export const Cup = ({ color, size, gameMatrix, cellSizes }) => {
  const [moved, setMoved] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => !moved,
      onPanResponderGrant: (e, gesture) => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gesture) => {
        // pan.flattenOffset();
        if (248 < gesture.moveY && gesture.moveY <= 248 + 100) {
          //first row
          if (15 < gesture.moveX && gesture.moveX <= 15 + 100) {
            Animated.spring(pan, {
              toValue: { x: 15, y: 248 },
              friction: 45,
              useNativeDriver: false,
            }).start();
            setMoved(false)
          } else if (145 < gesture.moveX && gesture.moveX <= 145 + 100) {
            Animated.spring(pan, {
              toValue: { x: 145, y: 248 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          } else if (275 < gesture.moveX && gesture.moveX <= 275 + 100) {
            Animated.spring(pan, {
              toValue: { x: 275, y: 248 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          }
        } else if (378 < gesture.moveY && gesture.moveY <= 378 + 100) {
          //second row
          if (15 < gesture.moveX && gesture.moveX <= 15 + 100) {
            Animated.spring(pan, {
              toValue: { x: 15, y: 378 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          } else if (145 < gesture.moveX && gesture.moveX <= 145 + 100) {
            Animated.spring(pan, {
              toValue: { x: 145, y: 378 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          } else if (275 < gesture.moveX && gesture.moveX <= 275 + 100) {
            Animated.spring(pan, {
              toValue: { x: 275, y: 378 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          }
        } else if (508 < gesture.moveY && gesture.moveY <= 508 + 100) {
          //second row
          if (15 < gesture.moveX && gesture.moveX <= 15 + 100) {
            Animated.spring(pan, {
              toValue: { x: 15, y: 508 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          } else if (145 < gesture.moveX && gesture.moveX <= 145 + 100) {
            Animated.spring(pan, {
              toValue: { x: 145, y: 508 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          } else if (275 < gesture.moveX && gesture.moveX <= 275 + 100) {
            Animated.spring(pan, {
              toValue: { x: 275, y: 508 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              friction: 45,
              useNativeDriver: false,
            }).start();
          }
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 45,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.Image
      style={[
        {
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        },
      ]}
      {...panResponder.panHandlers}
      source={getImg(size)}
    />
  );
};
