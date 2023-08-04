import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralStyles, assetsIcons, assetsImages } from "../../../assets";
import { CustomCard } from "../../components";
import { AnalysisScreenNavigationProp } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export default function AnalysisScreen() {
  const navigation = useNavigation<AnalysisScreenNavigationProp>();
  const { t } = useTranslation();

  return (
    <SafeAreaView
      style={[GeneralStyles.container, { justifyContent: "center" }]}
    >
      <View style={GeneralStyles.subContainer}>
        <Text style={{ color: "gray", fontSize: 14 }}>
          {t("common:initMessage")}
        </Text>
        <CustomCard
          title={`${t("common:ultrasound")}`}
          navigation={navigation}
          imgSource={assetsImages.ultrasoundExample}
          iconSource={assetsIcons.ultrasound}
        />
        <CustomCard
          positionLeft={true}
          navigation={navigation}
          title={`${t("common:mammography")}`}
          imgSource={assetsImages.mammographyExample}
          iconSource={assetsIcons.mammography}
        />
      </View>
    </SafeAreaView>
  );
}
