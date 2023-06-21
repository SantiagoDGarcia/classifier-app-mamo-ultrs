import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralStyles, assetsIcons, assetsImages } from "../../../constants";
import { CustomCard } from "../../components";
import { AnalysisScreenProp } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";

export default function AnalysisScreen() {
  const navigation = useNavigation<AnalysisScreenProp>();
  return (
    <SafeAreaView
      style={[GeneralStyles.container, { justifyContent: "center" }]}
    >
      <View style={GeneralStyles.subContainer}>
        <Text style={{ color: "gray", fontSize: 14 }}>
          Selecciona el tipo de imágen a analizar.
        </Text>
        <CustomCard
          title="Ultrasonido"
          navigation={navigation}
          imgSource={assetsImages.ultrasoundExample}
          iconSource={assetsIcons.ultrasound}
        />
        <CustomCard
          positionLeft={true}
          navigation={navigation}
          title="Mamografia"
          imgSource={assetsImages.mammographyExample}
          iconSource={assetsIcons.mammography}
        />
      </View>
    </SafeAreaView>
  );
}
