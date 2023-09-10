import React, { PureComponent } from "react";
import { TouchableHighlight, View, Image, Text, Alert } from "react-native";
import { ColorsTheme, GeneralStyles, HistStyles } from "../../assets";
import { CustomDivider, CustomDividerText } from "./CustomDivider";
import { getDurationAnalysis, getTimePosted } from "../helpers";
import { hideResultData } from "../services";

export default class CustomListItemHist extends PureComponent<CustomListItemHistProps> {
  render() {
    const { item, navigation, t, refreshData } = this.props;
    const handleLongPress = () => {
      Alert.alert(
        t("alert:deleteAlertTitle"),
        t("alert:deleteAlertInfo"),
        [
          {
            text: t("alert:cancel"),
            onPress: () => {},
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () =>
              hideResultData({ idResult: item.idResult }).then(() => {
                refreshData();
              }),
          },
        ],
        { cancelable: false }
      );
    };
    var thisType =
      item.typeAnalysis == "U"
        ? t("common:ultrasound")
        : t("common:mammography");
    return (
      <View style={{ paddingVertical: 5 }}>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("Results", {
              idResult: item.idResult,
              typeAnalysis: thisType,
            })
          }
          onLongPress={handleLongPress}
          underlayColor={ColorsTheme.tertiary}
        >
          <View style={{ paddingBottom: 2 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={HistStyles.imagesContainer}>
                <Image
                  source={{
                    uri: item.imgUrl,
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
              <Text>{getTimePosted(item.dateAnalysis)}</Text>
            </View>
            <CustomDivider />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
