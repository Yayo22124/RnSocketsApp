import { createTheme, darkColors } from "@rneui/themed";

import { Platform } from "react-native";

export const theme = createTheme({
    darkColors: {
      ...Platform.select({
        default: darkColors.platform.android,
        ios: darkColors.platform.ios,
      }),
    },
  });
  