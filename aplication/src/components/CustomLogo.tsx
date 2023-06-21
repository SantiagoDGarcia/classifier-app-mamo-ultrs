import { Text, View, Image, SafeAreaView } from "react-native";
import { GeneralStyles } from "../../constants/styles";
import { FONTS, assetsIcons } from "../../constants";

//import { Bower } from '../../assets/img/bower.svg'
type defaultProps = {
  color?: string;
};
export default function CustomLogo({ color }: defaultProps) {
  return (
    <SafeAreaView style={GeneralStyles.logotipe}>
      <Text
        style={[
          GeneralStyles.logotipeText,
          { color: color ? color : "white", fontFamily: FONTS.bold },
        ]}
      >
        MamaCheck
      </Text>
      <Image source={assetsIcons.logoBase} style={GeneralStyles.logotipeImg} />
    </SafeAreaView>
  );
}

export function CustomLogoMedium({}: defaultProps) {
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
