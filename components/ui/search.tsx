import Feather from "@expo/vector-icons/Feather";

import React from "react";

import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/colors";

type SearchProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
};

export function Search({ containerStyle, ...props }: SearchProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Feather name="search" size={20} color={Colors.gray} />

      <TextInput
        placeholder="Buscar conteúdo..."
        placeholderTextColor={Colors.gray}
        style={styles.input}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,

    backgroundColor: "#141820",

    borderRadius: 18,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 16,

    gap: 12,
  },

  input: {
    flex: 1,

    color: Colors.text,

    fontSize: 16,

    fontFamily: "Roboto_400Regular",
  },
});
