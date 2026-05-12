import React from "react";

import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { Colors } from "@/constants/colors";
import { Text } from "./global-text";

type CategoriesProps = {
  items: string[];
  activeCategory?: string;
  onSelect?: (category: string) => void;
};

export function Categories({
  items,
  activeCategory,
  onSelect,
}: CategoriesProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {items.map((category) => {
          const isActive = activeCategory === category;

          return (
            <TouchableOpacity
              key={category}
              activeOpacity={0.8}
              onPress={() => onSelect?.(category)}
              style={[styles.category, isActive && styles.activeCategory]}
            >
              <Text
                style={[
                  styles.categoryText,
                  isActive && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  content: {
    paddingRight: 24,
    gap: 12,
  },

  category: {
    height: 42,
    paddingHorizontal: 18,
    borderRadius: 21,

    backgroundColor: "#111522",

    justifyContent: "center",
    alignItems: "center",
  },

  activeCategory: {
    backgroundColor: Colors.primary,
  },

  categoryText: {
    color: Colors.text,
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
  },

  activeCategoryText: {
    color: Colors.dark,
  },
});
