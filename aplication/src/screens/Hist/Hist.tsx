import {
  Text,
  View,
  TouchableHighlight,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HistScreenNavigationProp } from "../../navigation/types";
import { useEffect, useState } from "react";
import {
  CustomActivityIndicator,
  CustomDividerText,
  CustomDivider,
} from "../../components";
import { GeneralStyles, HistStyles, ColorsTheme } from "../../../constants";
import { getAllResultsData } from "../../services";
import { timeConverter } from "../../helpers";
import FastImage from "react-native-fast-image";
import { useTranslation } from "react-i18next";

export default function HistScreen() {
  const navigation = useNavigation<HistScreenNavigationProp>();

  const [loading, setLoading] = useState<boolean | null>(true);
  const [histData, setHistData]: any = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setLoading(true);
      getAllResultsData().then((value) => {
        setHistData(value);
        setLoading(false);
      });
    });

    return unsubscribe;
  }, []);
  return (
    <SafeAreaView style={GeneralStyles.container}>
      {loading ? (
        <CustomActivityIndicator
          indicatorActive={loading}
          actionText={t("alert:loading")}
        />
      ) : (
        <View style={[GeneralStyles.subContainer, { flex: 1 }]}>
          <Text style={GeneralStyles.labelTitle}>
            {t("common:previousAnalysisHistory")}
          </Text>
          <View style={{ width: "100%", flex: 1 }}>
            <FlatList
              data={histData}
              showsVerticalScrollIndicator={false}
              style={{ backgroundColor: "white", flex: 1 }}
              overScrollMode="never"
              ListEmptyComponent={
                <Text style={{ textAlign: "center" }}>
                  {t("common:noHistResults")}
                </Text>
              }
              renderItem={({ item }) => {
                var thisType =
                  item.typeAnalysis == "U"
                    ? t("common:ultrasound")
                    : t("common:mammography");
                return (
                  <TouchableHighlight
                    onPress={() =>
                      navigation.navigate("Results", {
                        idResult: item.idResult,
                        typeAnalysis: thisType,
                      })
                    }
                    underlayColor={ColorsTheme.tertiary}
                  >
                    <View style={{ paddingTop: 15 }}>
                      <View style={{ flexDirection: "row" }}>
                        <View style={HistStyles.imagesContainer}>
                          <Image
                            source={{
                              uri: item.imgUrl,
                              //priority: FastImage.priority.normal,
                            }}
                            style={HistStyles.images}
                          />
                        </View>
                        <View style={HistStyles.infoContainer}>
                          <View
                            style={[HistStyles.container, { marginBottom: 5 }]}
                          >
                            <Text style={GeneralStyles.labelSubtitle}>
                              {t("common:results")}
                            </Text>
                            <Text
                              style={[
                                GeneralStyles.infoText,
                                {
                                  backgroundColor:
                                    item.testResult === "B"
                                      ? ColorsTheme.positiveResult
                                      : ColorsTheme.negativeResult,
                                },
                              ]}
                            >
                              {item.testResult === "B"
                                ? t("common:benign")
                                : t("common:malignant")}
                            </Text>
                          </View>
                          <View style={HistStyles.container}>
                            <View style={HistStyles.subLeftContainer}>
                              <Text style={HistStyles.labelStats}>
                                {t("common:roiExtracted")}:
                              </Text>
                            </View>
                            <View style={HistStyles.subRightContainer}>
                              <Text style={HistStyles.infoStats}>SI</Text>
                            </View>
                          </View>
                          <View style={HistStyles.container}>
                            <View style={HistStyles.subLeftContainer}>
                              <Text style={HistStyles.labelStats}>
                                {t("common:durationAnalysis")}:
                              </Text>
                            </View>
                            <View style={HistStyles.subRightContainer}>
                              <Text style={HistStyles.infoStats}>
                                Menos de 1 min.
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={[HistStyles.container, { marginTop: 8 }]}>
                        <CustomDividerText
                          positionLeft={true}
                          text={thisType}
                        />
                        <Text>{timeConverter(item.dateAnalysis)}</Text>
                      </View>
                      <CustomDivider />
                    </View>
                  </TouchableHighlight>
                );
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
