import React from "react";
import { Text as RNText, TextProps } from "react-native";

export function GlobalText(props: TextProps) {
  return (
    <RNText
      {...props}
      style={[
        { fontFamily: "Roboto_400Regular", letterSpacing: -1 },
        props.style,
      ]}
    />
  );
}

export { GlobalText as Text };
