import { Button, ThemeProvider, createTheme, darkColors, lightColors } from "@rneui/themed";
import { Link, Tabs } from "expo-router";
import { Platform, Pressable } from "react-native";

import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { theme } from "@/components/theme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();


  return (
    <ThemeProvider theme={theme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Monitoreo",
            headerTitleAlign: "center",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="dashboard" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: "Registros",
            headerTitleAlign: "center",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="database" color={color} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
