import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";

import { SymbolViewProps, SymbolWeight } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, StyleProp, TextStyle } from "react-native";

type IconLibrary = "material" | "community" | "octicons";

type IconConfig = {
  library: IconLibrary;
  name: string;
};

const MAPPING = {
  house: {
    library: "material",
    name: "home",
  },

  brain: {
    library: "community",
    name: "brain",
  },

  "tray.fill": {
    library: "octicons",
    name: "inbox",
  },
} as const satisfies Partial<Record<SymbolViewProps["name"], IconConfig>>;

type IconSymbolName = keyof typeof MAPPING;

type Props = {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
};

export function IconSymbol({ name, size = 24, color, style }: Props) {
  const icon = MAPPING[name];

  if (!icon) {
    return (
      <MaterialIcons name="help" size={size} color={color} style={style} />
    );
  }

  switch (icon.library) {
    case "community":
      return (
        <MaterialCommunityIcons
          name={
            icon.name as ComponentProps<typeof MaterialCommunityIcons>["name"]
          }
          size={size}
          color={color}
          style={style}
        />
      );

    case "octicons":
      return (
        <Octicons
          name={icon.name as ComponentProps<typeof Octicons>["name"]}
          size={size}
          color={color}
          style={style}
        />
      );

    case "material":
    default:
      return (
        <MaterialIcons
          name={icon.name as ComponentProps<typeof MaterialIcons>["name"]}
          size={size}
          color={color}
          style={style}
        />
      );
  }
}
