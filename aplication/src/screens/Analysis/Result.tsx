import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import {
  CustomActivityIndicator,
  CustomFullScreenImage,
  CustomHorizontalRow,
  CustomDivider,
  CustomDividerText,
} from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ResultsScreenRouteProp,
  ResultsScreenNavigationProp,
} from "../../navigation/types";
import { getResultData } from "../../services";
import { AnalysisStyles, GeneralStyles, ColorsTheme } from "../../../assets";
import { useTranslation } from "react-i18next";
import { getDurationAnalysis, getTimePosted, showError } from "../../helpers";

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
      getResultData({ idResult })
        .then((value) => {
          setResultData(value.data());
          const imgList = [value.data().imgUrl];
          if (value.data().imgDrawnUrl) {
            imgList.push(value.data().imgDrawnUrl);
          }
          setImgList(imgList);
          setLoading(false);
        })
        .catch((error) => {
          showError(error, t);
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[GeneralStyles.subContainer, { alignItems: "center" }]}>
            <View style={{ width: "100%", marginVertical: 15 }}>
              <Text style={GeneralStyles.textDescription}>
                {t("common:algorithmEvaluation")}
              </Text>
            </View>
            <View style={AnalysisStyles.resultsTextResultContainer}>
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
            <View style={AnalysisStyles.imgContainer}>
              <CustomFullScreenImage uri={imgList!} size={200} indexImage={0} />
            </View>
            <View style={AnalysisStyles.resultsInfoContainer}>
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
                  description={getTimePosted(resultData.dateAnalysis)}
                />
                <CustomHorizontalRow
                  isText
                  label={t("common:duration")!}
                  description={
                    getDurationAnalysis(resultData.durationAnalysis) +
                    t("common:approx")
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
                <View style={AnalysisStyles.resultsRoiContainer}>
                  <CustomFullScreenImage
                    uri={imgList!}
                    size={200}
                    indexImage={1}
                  />
                </View>
                <View style={{ width: "100%", marginVertical: 15 }}>
                  <Text style={GeneralStyles.textDescription}>
                    {t("common:algorithmEvaluation2")}
                  </Text>
                </View>
                <CustomDividerText text={t("common:idontLikeResult")} />
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
