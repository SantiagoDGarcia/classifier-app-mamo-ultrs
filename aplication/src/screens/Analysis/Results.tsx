import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { AnalysisStyles, GeneralStyles } from "../../../constants";
import { CustomDivider } from "../../components/CustomDivider";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ResultsScreenRouteProp } from "../../navigation/types";
import { ColorsTheme } from "../../../constants";
import { getResultData } from "../../services";
import {
  CustomActivityIndicator,
  CustomFullScreenImage,
  CustomHorizontalRow,
} from "../../components";
import { ResultsScreenNavigationProp } from "../../navigation/types";
import { useTranslation } from "react-i18next";
import { showAlert, timeConverter } from "../../helpers";

export default function ResultsScreen() {
  const navigation = useNavigation<ResultsScreenNavigationProp>();
  const route = useRoute<ResultsScreenRouteProp>();
  const { idResult } = route.params;
  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean | null>(true);
  const [imgList, setImgList] = useState<string[] | null>([]);
  const [resultData, setResultData]: any = useState(null);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setLoading(true);
      getResultData(idResult)
        .then((value) => {
          setResultData(value.data());
          const imgList = [value.data().imgUrl];
          if (value.data().imgDrawnUrl) {
            imgList.push(value.data().imgDrawnUrl);
          }
          setImgList(imgList);
          setLoading(false);
        })
        .catch(() => {
          showAlert(`${t("alert:errorGeneric")}`);
          navigation.goBack();
        });
    });

    return unsubscribe;
  }, [idResult, navigation]);
  return (
    <SafeAreaView style={[GeneralStyles.container]}>
      {loading ? (
        <CustomActivityIndicator
          indicatorActive={loading}
          actionText={`${t("alert:loading")}`}
        />
      ) : (
        <ScrollView>
          <View style={[GeneralStyles.subContainer, { alignItems: "center" }]}>
            <View style={{ width: "100%", marginVertical: 15 }}>
              <Text style={GeneralStyles.textDescription}>
                {t("common:algorithmEvaluation")}
              </Text>
            </View>
            <View style={{ width: "50%", marginBottom: 15 }}>
              <Text
                style={[
                  GeneralStyles.infoText,
                  {
                    fontSize: 20,
                    backgroundColor:
                      resultData.testResult === "B"
                        ? ColorsTheme.positiveResult
                        : ColorsTheme.negativeResult,
                  },
                ]}
              >
                {resultData.testResult === "B"
                  ? `${t("common:benign")}`
                  : `${t("common:malignant")}`}
              </Text>
            </View>

            {resultData.roiExtracted ? (
              <View style={AnalysisStyles.imgsContainer}>
                <CustomFullScreenImage
                  uri={imgList!}
                  size={160}
                  indexImage={0}
                />
                <CustomFullScreenImage
                  uri={imgList!}
                  size={160}
                  indexImage={1}
                />
              </View>
            ) : (
              <View style={AnalysisStyles.imgContainer}>
                <CustomFullScreenImage
                  uri={imgList!}
                  size={200}
                  indexImage={0}
                />
              </View>
            )}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ width: "50%" }}>
                <CustomHorizontalRow
                  isText
                  label={t("common:type")!}
                  description={
                    resultData.typeAnalysis == "U"
                      ? t("common:ultrasound")!
                      : t("common:mammography")!
                  }
                />
                <CustomHorizontalRow
                  isText
                  label={t("common:date")!}
                  description={timeConverter(resultData.dateAnalysis)}
                />
                <CustomHorizontalRow
                  isText
                  label={t("common:duration")!}
                  description={
                    resultData.durationAnalysis + t("common:minutes")!
                  }
                />
              </View>
              <View style={{ width: "50%" }}>
                <CustomHorizontalRow
                  isText
                  label={t("common:roiExtracted")!}
                  description={
                    resultData.roiExtract ? t("common:yes")! : t("common:no")!
                  }
                />
                <CustomHorizontalRow
                  isText
                  label={t("common:cant")!}
                  description={resultData.cantRoi ? resultData.cantRoi : 0}
                />
              </View>
            </View>

            <CustomDivider />
            {resultData.roiExtracted && (
              <>
                <Text style={GeneralStyles.labelTitle}>
                  {t("common:regionOfInterest")}
                </Text>
                <View style={{ flex: 1 }}>
                  <FlatList
                    horizontal
                    data={resultData.imgRoiUrl}
                    style={{ backgroundColor: "white", flex: 1 }}
                    overScrollMode="never"
                    renderItem={({ item }) => {
                      return (
                        <Image
                          source={{
                            uri: item,
                          }}
                          style={{
                            width: 128,
                            height: 128,
                            margin: 5,
                          }}
                        />
                      );
                    }}
                  />
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
