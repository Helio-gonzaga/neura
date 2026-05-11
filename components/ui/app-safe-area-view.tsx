import { Colors } from "@/constants/colors";
import React from "react";
import { StyleSheet } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

export function AppSafeAreaView({ style, ...props }: SafeAreaViewProps) {
  return (
    <SafeAreaView
      style={[styles.container, style]}
      edges={props.edges}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
