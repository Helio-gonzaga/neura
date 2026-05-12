import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

type CardProps = {
  children: React.ReactNode;
  height?: number;
  padding?: number;
  style?: StyleProp<ViewStyle>;
};

export default function Card({
  children,
  height = 180,
  padding = 15,
  style,
}: CardProps) {
  return (
    <LinearGradient
      colors={["#0e1116", "#131722", "#0E1118"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.card, { height, padding }, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 17,
    overflow: "hidden",
  },
});
