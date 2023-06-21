import React from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { AnalysisStyles, GeneralStyles } from "../../../constants/styles";
import { CustomDivider } from "../../components/CustomDivider";

export default function ResultsScreen() {
  return (
    <SafeAreaView style={[GeneralStyles.container]}>
      <ScrollView>
        <View style={[GeneralStyles.subContainer, { alignItems: "center" }]}>
          <Text style={GeneralStyles.labelTitle}>Análisis de ultrasonido</Text>
          <View style={AnalysisStyles.resultsContainer}>
            <View style={AnalysisStyles.resultsSubContainer}>
              <View
                style={[
                  GeneralStyles.borderContainer,
                  { width: 160, height: 160, backgroundColor: "#FFF8F7" },
                ]}
              />
            </View>
            <View style={AnalysisStyles.resultsSubContainer}>
              <Text style={GeneralStyles.labelSubtitle}>
                Región de interes (RoI)
              </Text>
            </View>
          </View>
          <CustomDivider />
          <View style={{ width: "100%", marginVertical: 10 }}>
            <Text style={GeneralStyles.textDescription}>
              Con las evaluaciones de nuestro algoritmo, deducimos con un 92% de
              precisión que el resultado de tu imágen es:
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={[
                GeneralStyles.infoText,
                { fontSize: 20, backgroundColor: "#539E2F" },
              ]}
            >
              BENIGNO
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
