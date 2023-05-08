import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from "@react-navigation/drawer";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import COLORS from "../constants/colors";

function DrawerScreenContainer({ children }) {
  const isDrawerOpen = useDrawerStatus();
  //   const progress = useDrawerProgress();

  //   const animatedStyle = useAnimatedStyle(() => {
  //     return {
  //       transform: [
  //         {
  //           translateX: interpolate(progress, [0, 1], [-100, 0]),
  //         },
  //       ],
  //     };
  //   });

  //   const animatedStyles = useAnimatedStyle(() => {
  //     const scale = interpolate(progress, [0, 1], [1, 0.8]);
  //     const borderRadius = interpolate(progress, [0, 1], [0, 25]);

  //     return {
  //       transform: [{ scale: scale }],
  //       borderRadius: borderRadius,
  //     };
  //   });

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          backgroundColor: COLORS.white,
          // borderRadius,
          // transform: [{ scale }],
          overflow: "hidden",
        },
        // animatedStyle,
      ]}
    >
      <StatusBar
        backgroundColor={isDrawerOpen == "open" ? COLORS.primary : COLORS.white}
        barStyle="dark-content"
      />
      {children}
    </Animated.View>
  );
}

export default DrawerScreenContainer;

const styles = StyleSheet.create({});
