import { View, StatusBar } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../../constants";
export default function CustomStatusBar() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ height: insets.top, backgroundColor: COLORS.primary }}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.primary}
        barStyle={"dark-content"}
      />
    </View>
  );
}
