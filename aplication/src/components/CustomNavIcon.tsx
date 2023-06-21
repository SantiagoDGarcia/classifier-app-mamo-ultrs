import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
//import Icon from 'react-native-ionicons'
import { NavStyles, COLORS } from "../../constants";

export default function CustomNavIcon(
  name: any,
  size: number,
  focused: boolean
) {
  return (
    <View
      style={[
        NavStyles.tabIconStyle,
        { backgroundColor: focused ? COLORS.secondary : "none" },
      ]}
    >
      <MaterialCommunityIcons name={name} size={size} color="#343030" />
    </View>
  );
}
