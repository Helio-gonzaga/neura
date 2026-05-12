import { Colors } from "@/constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Tabs } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,

        tabBarStyle: {
          backgroundColor: Colors.dark,
          borderTopWidth: 0,
          elevation: 0,
          height: 85,
          paddingBottom: 25,
          paddingTop: 12,
          position: "absolute",
        },

        tabBarLabelStyle: {
          fontFamily: "Roboto_500Medium",
          fontSize: 13,
          marginTop: -2,
        },

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inbox",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="email-variant"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="brain" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "",

          tabBarButton: (props) => (
            <Pressable
              onPress={props.onPress}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,

                  backgroundColor: Colors.primary,

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="plus" size={25} color={Colors.dark} />
              </View>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Buscar",

          tabBarIcon: ({ color }) => (
            <Feather name="search" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",

          tabBarIcon: ({ color }) => (
            <Feather name="user" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
