import { ActivityIndicator, Text, View } from "react-native";
import { AlertStyles, ColorsTheme } from "../../constants";
import { Portal } from "react-native-portalize";

type CustomActivityIndicatorProps = {
  actionText: string;
  indicatorActive: boolean;
};

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
