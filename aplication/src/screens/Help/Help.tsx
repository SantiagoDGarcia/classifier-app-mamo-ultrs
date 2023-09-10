import {
  Text,
  View,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { CustomDividerText, CustomDivider } from "../../components";
import { assetsIcons, GeneralStyles, HelpStyles } from "../../../assets";
import HelpContent from "./HelpContent";
import { useTranslation } from "react-i18next";

export default function HelpScreen() {
  const { t } = useTranslation();
  const data = HelpContent();
  return (
    <SafeAreaView style={[GeneralStyles.container]}>
      <View style={[GeneralStyles.subContainer, { flex: 1 }]}>
        <View style={{ width: "100%", flex: 1 }}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            endFillColor="#000"
            keyExtractor={(item) => item.id.toString()}
            overScrollMode="never"
            ListHeaderComponent={() => (
              <View style={HelpStyles.imageBackContainer}>
                <ImageBackground
                  source={assetsIcons.logoBase}
                  resizeMode="cover"
                  style={HelpStyles.imageBack}
                  imageStyle={{ opacity: 0.3 }}
                >
                  <Text style={[GeneralStyles.logotipeText, { fontSize: 50 }]}>
                    BraNet
                  </Text>
                </ImageBackground>
              </View>
            )}
            ListFooterComponent={
              <Text style={HelpStyles.footerText}>
                {t("common:needMoreHelp")}
              </Text>
            }
            renderItem={({ item }) => (
              <View style={HelpStyles.itemContainer}>
                <CustomDividerText positionLeft={true} text={item.title} />
                <Text
                  style={[GeneralStyles.textDescription, { marginBottom: 15 }]}
                >
                  {item.description}
                </Text>
                <CustomDivider />
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
