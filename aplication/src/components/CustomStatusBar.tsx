import { View, StatusBar } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ColorsTheme } from "../../assets";

export default function CustomStatusBar() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ height: insets.top, backgroundColor: ColorsTheme.primary }}>
      <StatusBar
        animated
        backgroundColor={ColorsTheme.primary}
        barStyle="dark-content"
      />
    </View>
  );
}
