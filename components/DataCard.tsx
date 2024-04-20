import { Card, ThemeProvider, darkColors } from "@rneui/themed";
import React, { ReactNode } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "./theme";

export default function DataCard({
  children,
  style,
  title,
  icon,
}: {
  children: ReactNode;
  style?: ViewStyle;
  title?: string;
  icon?: React.ComponentProps<typeof FontAwesome>["name"];
}) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        containerStyle={{
          backgroundColor: darkColors.grey4,
          borderColor: "transparent",
          borderRadius: 8,
          ...style
        }}
      >
        {title && (
          <>
            {icon && (
              <FontAwesome
                style={{ marginBottom: -3 }}
                color={darkColors.black}
                size={12}
              />
            )}
            <Card.Title style={{ color: darkColors.black }}>{title}</Card.Title>
            <Card.Divider></Card.Divider>
          </>
        )}
        {children}
      </Card>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
