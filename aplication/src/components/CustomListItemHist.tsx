import React, { PureComponent } from "react";
import { TouchableHighlight, View, Image, Text } from "react-native";
import { ColorsTheme, GeneralStyles, HistStyles } from "../../assets";
import { CustomDivider, CustomDividerText } from "./CustomDivider";
import { getDurationAnalysis, timeConverter } from "../helpers";

export default class CustomListItemHist extends PureComponent<CustomListItemHistProps> {
  render() {
    const { item, navigation, t } = this.props;
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
              <View style={[HistStyles.container, { marginBottom: 5 }]}>
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
                  <Text style={HistStyles.infoStats}>
                    {item.roiExtracted ? t("common:yes") : t("common:no")}
                  </Text>
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
                    {getDurationAnalysis(item.durationAnalysis)}
                    {t("common:approx")}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[HistStyles.container, { marginTop: 8 }]}>
            <CustomDividerText positionLeft={true} text={thisType} />
            <Text>{timeConverter(item.dateAnalysis)}</Text>
          </View>
          <CustomDivider />
        </View>
      </TouchableHighlight>
    );
  }
}
