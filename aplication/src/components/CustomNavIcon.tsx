import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { NavStyles, ColorsTheme } from "../../assets";

export default function CustomNavIcon({
  name,
  size = 23,
  focused,
}: CustomNavIconProps) {
  return (
    <View
      style={[
        NavStyles.tabIconStyle,
        { backgroundColor: focused ? ColorsTheme.secondary : "transparent" },
      ]}
    >
      <MaterialCommunityIcons name={name} size={size} color="#343030" />
    </View>
  );
}
