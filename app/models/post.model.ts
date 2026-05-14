import { ImageSourcePropType } from "react-native";

export type Post = {
  id: string;
  title: string;
  source: string;
  time: string;
  image: ImageSourcePropType;
  icon: string;
  iconColor: string;
  type: "bookmark" | "more";
  link?: string;
  notes?: string;
  read?: boolean;
};
