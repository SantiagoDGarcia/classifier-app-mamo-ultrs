import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { GeneralStyles, TestStyles } from "../../../constants/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  CustomDivider,
  CustomDividerText,
  CustomButton,
  CustomActivityIndicator,
} from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  TestScreenNavigationProp,
  TestScreenRouteProp,
} from "../../navigation/types";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ColorsTheme } from "../../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { analizeImage } from "../../services";
import { showAlert } from "../../helpers";
import { useTranslation } from "react-i18next";

export default function TestScreen() {
  const navigation = useNavigation<TestScreenNavigationProp>();
  const route = useRoute<TestScreenRouteProp>();
  const { t } = useTranslation();

  const { typeAnalysis } = route.params;
  const [imgSelected, setImgSelected] =
    useState<ImagePicker.ImagePickerResult>();
  const [extractRoi, setExtractRoi] = useState(false);
  const [loading, setLoading] = useState<boolean | null>(false);

  const ChooseImage = async () => {
    let result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
    if (!result.canceled) setImgSelected(result);
  };

  const startTest = async () => {
    let response;
    if (imgSelected) {
      setLoading(true);
      response = await analizeImage(typeAnalysis, extractRoi, imgSelected);
      if (response instanceof Error) {
        showAlert(response.toString());
      } else {
        console.log(response);
        if (response.result == "ERROR") {
          showAlert(response.aditionalInfo.toString());
        } else {
          navigation.navigate("Results", {
            idResult: response.idResult,
            typeAnalysis: typeAnalysis,
          });
        }
      }
      setLoading(false);
    } else {
      showAlert(`${t("alert:chooseImage")}`);
    }
  };
  return (
    <SafeAreaView style={[GeneralStyles.container]}>
      {loading && (
        <CustomActivityIndicator
          indicatorActive={loading}
          actionText={t("alert:analyzingImage")}
        />
      )}
      <ScrollView>
        <View style={[GeneralStyles.subContainer, { alignItems: "center" }]}>
          <TouchableOpacity
            onPress={() =>
              imgSelected ? setImgSelected(undefined) : ChooseImage()
            }
            style={[GeneralStyles.borderContainer, TestStyles.selectImage]}
          >
            {imgSelected ? (
              <>
                <View style={TestStyles.cancelIcon}>
                  <MaterialCommunityIcons
                    name="close-circle"
                    size={50}
                    color="black"
                  />
                </View>
                <Image
                  // @ts-ignore: Object is possibly 'null'.
                  source={{ uri: imgSelected.assets[0].uri }}
                  style={TestStyles.imagePreview}
                />
              </>
            ) : (
              <MaterialCommunityIcons
                name="image-plus"
                size={40}
                color="#2E2E2E"
              />
            )}
          </TouchableOpacity>
          <View style={TestStyles.checkContainer}>
            <BouncyCheckbox
              onPress={(extractRoi: boolean) => setExtractRoi(extractRoi)}
              fillColor={ColorsTheme.primary}
            />
            <Text style={GeneralStyles.textDescription}>
              {t("common:extractMasksAndRegionsOfInterest")}
            </Text>
          </View>
          <CustomDividerText positionLeft={true} text={t("common:loadImage")} />
          <CustomDivider />
          <View style={TestStyles.infoContainer}>
            <View style={{ marginBottom: 0 }}>
              <Text style={GeneralStyles.textDescription}>
                {t("common:weRecommend")}
              </Text>
              <View style={{ marginLeft: 10 }}>
                <Text style={GeneralStyles.textDescription}>
                  {t("common:cropImage")}
                </Text>
                <Text style={GeneralStyles.textDescription}>
                  {t("common:imageResolution")}
                </Text>
                <Text style={GeneralStyles.textDescription}>
                  {t("common:supportedFormats")}
                </Text>
                <Text style={GeneralStyles.textDescription}>
                  {t("common:undistortedImage")}
                </Text>
              </View>
              <View style={{ marginBottom: 0, marginTop: 15 }}>
                <CustomDividerText
                  positionLeft={false}
                  text={t("common:moreInformation")}
                />
              </View>
            </View>

            <CustomButton
              text={t("common:startEvaluation")}
              onPress={() => startTest()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
