import { Text, View, Image, SafeAreaView } from "react-native";
import { GeneralStyles, FontsTheme, assetsIcons } from "../../assets";

export default function CustomLogo({ color }: CustomLogoProps) {
  return (
    <SafeAreaView style={GeneralStyles.logotipe}>
      <Text
        style={[
          GeneralStyles.logotipeText,
          {
            color: color || "white",
            fontFamily: FontsTheme.bold,
          },
        ]}
      >
        BraNet
      </Text>
      <Image source={assetsIcons.logoBase} style={GeneralStyles.logotipeImg} />
    </SafeAreaView>
  );
}

export function CustomLogoMedium() {
  return (
    <View style={[GeneralStyles.logotipe, { flexDirection: "column" }]}>
      <Image source={assetsIcons.logoBase} style={{ width: 85, height: 85 }} />
      <Text
        style={[GeneralStyles.logotipeText, { color: "black", fontSize: 28 }]}
      >
        BraNet
      </Text>
    </View>
  );
}
