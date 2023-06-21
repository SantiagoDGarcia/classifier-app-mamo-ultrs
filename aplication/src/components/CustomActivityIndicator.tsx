import { ActivityIndicator, Text, View } from "react-native";
import { AlertStyles, COLORS } from "../../constants";

type defaultProps = {
  actionText: string;
};

export default function CustomActivityIndicator({ actionText }: defaultProps) {
  return (
    <View style={AlertStyles.container}>
      <View style={AlertStyles.subContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={AlertStyles.text}>{actionText}</Text>
      </View>
    </View>
  );
}
