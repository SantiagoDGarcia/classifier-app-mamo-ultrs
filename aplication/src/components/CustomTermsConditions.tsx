import React from "react";
import { View, Text, ScrollView } from "react-native";
import { TermsConditionsStyles } from "../../assets";
import { useTranslation } from "react-i18next";

export default function CustomTermsConditions() {
  const { t } = useTranslation();

  return (
    <View style={TermsConditionsStyles.container}>
      <ScrollView
        style={TermsConditionsStyles.scrollStyle}
        showsVerticalScrollIndicator={false}
      >
        <View style={TermsConditionsStyles.sectionContainer}>
          <Text style={TermsConditionsStyles.title}>
            {t("termsConditions:title1")}
          </Text>
          <Text style={TermsConditionsStyles.info}>
            {t("termsConditions:info1")}
          </Text>
        </View>
        <View style={TermsConditionsStyles.sectionContainer}>
          <Text style={TermsConditionsStyles.title}>
            {t("termsConditions:title2")}
          </Text>
          <Text style={TermsConditionsStyles.info}>
            {t("termsConditions:info2")}
          </Text>
        </View>
        <View style={TermsConditionsStyles.sectionContainer}>
          <Text style={TermsConditionsStyles.title}>
            {t("termsConditions:title3")}
          </Text>
          <Text style={TermsConditionsStyles.info}>
            {t("termsConditions:info3")}
          </Text>
        </View>
        <View style={TermsConditionsStyles.sectionContainer}>
          <Text style={TermsConditionsStyles.title}>
            {t("termsConditions:title4")}
          </Text>
          <Text style={TermsConditionsStyles.info}>
            {t("termsConditions:info4")}
          </Text>
        </View>
        <View style={TermsConditionsStyles.sectionContainer}>
          <Text style={TermsConditionsStyles.title}>
            {t("termsConditions:title5")}
          </Text>
          <Text style={TermsConditionsStyles.info}>
            {t("termsConditions:info5")}
          </Text>
        </View>
        <View style={TermsConditionsStyles.sectionContainer}>
          <Text style={TermsConditionsStyles.title}>
            {t("termsConditions:title6")}
          </Text>
          <Text style={TermsConditionsStyles.info}>
            {t("termsConditions:info6")}
          </Text>
        </View>
        <View style={TermsConditionsStyles.sectionContainer}>
          <Text style={TermsConditionsStyles.title}>
            {t("termsConditions:title7")}
          </Text>
          <Text style={TermsConditionsStyles.info}>
            {t("termsConditions:info7")}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
