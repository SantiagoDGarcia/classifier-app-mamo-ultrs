import React from "react";
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { GeneralStyles } from "../../../constants/styles";
import {
  CustomDividerText,
  CustomDivider,
} from "../../components/CustomDivider";
import { assetsIcons } from "../../../constants";
type ItemData = {
  title: string;
  description: string;
};
const HelpContent: ItemData[] = [
  {
    title: "¿Que tipo de imagenes admite la aplicacion?",
    description:
      "La aplicacion admite diversos tipos de imágenes, entre ellos se sencuentran JPG, PNG, JPEG, BMP",
  },
  {
    title: "¿Como mejorar el resultado del analisis?",
    description:
      "La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG",
  },
  {
    title: "¿Como mejorar el resultado del analisis?",
    description:
      "La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG",
  },
  {
    title: "¿Que tipo de imagenes admite la aplicacion?",
    description:
      "La aplicacion admite diversos tipos de imagenes, entre ellos se sencuentran JPG, PNG, JPEG",
  },
  {
    title: "¿Como mejorar el resultado del analisis?",
    description:
      "La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG",
  },
  {
    title: "¿Como mejorar el resultado del analisis?",
    description:
      "La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG",
  },
  {
    title: "¿Que tipo de imagenes admite la aplicacion?",
    description:
      "La aplicacion admite diversos tipos de imagenes, entre ellos se sencuentran JPG, PNG, JPEG",
  },
  {
    title: "¿Como mejorar el resultado del analisis?",
    description:
      "La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG",
  },
  {
    title: "¿Como mejorar el resultado del analisis?",
    description:
      "La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG",
  },
];

export default function HelpScreen() {
  return (
    <SafeAreaView style={[GeneralStyles.container]}>
      <View style={[GeneralStyles.subContainer, { flex: 1 }]}>
        <View style={{ width: "100%", flex: 1 }}>
          <FlatList
            data={HelpContent}
            showsVerticalScrollIndicator={false}
            endFillColor="#000"
            overScrollMode="never"
            ListHeaderComponent={() => (
              <View
                style={{
                  width: "100%",
                  minHeight: 200,
                }}
              >
                <ImageBackground
                  source={assetsIcons.logoBase}
                  resizeMode="cover"
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  imageStyle={{ opacity: 0.3 }}
                >
                  <Text style={[GeneralStyles.logotipeText, { fontSize: 50 }]}>
                    MamaCheck
                  </Text>
                </ImageBackground>
              </View>
            )}
            renderItem={({ item }) => (
              <View style={{ marginVertical: 10, flex: 1 }}>
                <CustomDividerText positionLeft={true} text={item.title} />
                <Text
                  style={[GeneralStyles.textDescription, { marginBottom: 15 }]}
                >
                  {item.description}
                </Text>
                <CustomDivider />
              </View>
            )}
            // keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
