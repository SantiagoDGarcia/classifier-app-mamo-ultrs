import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { GeneralStyles } from "../../../constants/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  CustomDivider,
  CustomDividerText,
  CustomButton,
} from "../../components";

export default function TestScreen({ navigation }: any) {
  return (
    <SafeAreaView style={[GeneralStyles.container]}>
      <View style={[GeneralStyles.subContainer, { alignItems: "center" }]}>
        <TouchableOpacity onPress={() => {}} style={{}}>
          <View
            style={[
              GeneralStyles.borderContainer,
              {
                width: 230,
                height: 230,
                margin: 25,
                backgroundColor: "#FFF8F7",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <MaterialCommunityIcons
              name="image-plus"
              size={40}
              color="#2E2E2E"
            />
          </View>
        </TouchableOpacity>
        <CustomDividerText positionLeft={true} text="Cargar imagen" />
        <CustomDivider />
        <View
          style={{
            width: "100%",
            marginTop: 15,
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginBottom: 0 }}>
            <Text style={GeneralStyles.textDescription}>
              Ten en cuenta las siguientes caracteristicas para lograr el mejor
              resultado de tus imagenes
            </Text>
            <View style={{ marginLeft: 10 }}>
              <Text style={GeneralStyles.textDescription}>
                - La resolucion de la imagen es primordial para que el analisis
                salga de mejor manera.
              </Text>
              <Text style={GeneralStyles.textDescription}>
                - La aplicacion admite imagenes de tipo JPG, JPEG, PNG.
              </Text>
              <Text style={GeneralStyles.textDescription}>
                - Se debe controlar ciertos tipos de puntos adicionales.
              </Text>
            </View>
            <View style={{ marginBottom: 5, marginTop: 15 }}>
              <CustomDividerText positionLeft={false} text="Más información." />
            </View>
          </View>
          <CustomButton
            text="Iniciar evaluación"
            onPress={() => navigation.navigate("Results")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
