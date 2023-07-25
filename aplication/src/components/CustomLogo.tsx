import { Text, View, Image, SafeAreaView } from "react-native";
import { GeneralStyles } from "../../constants/styles";
import { FontsTheme, assetsIcons } from "../../constants";

type CustomLogoProps = {
  color?: string;
};

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
        MamaCheck
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
        MamaCheck
      </Text>
    </View>
  );
}
