import { ActivityIndicator, Text, View } from "react-native";
import { AlertStyles, ColorsTheme } from "../../assets";
import { Portal } from "react-native-portalize";

export default function CustomActivityIndicator({
  actionText,
  indicatorActive,
}: CustomActivityIndicatorProps) {
  return (
    <Portal>
      <View style={AlertStyles.container}>
        <View style={AlertStyles.subContainer}>
          {indicatorActive && (
            <ActivityIndicator size="large" color={ColorsTheme.primary} />
          )}
          <Text style={AlertStyles.text}>{actionText}</Text>
        </View>
      </View>
    </Portal>
  );
}
