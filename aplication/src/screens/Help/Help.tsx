import React from "react";
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { CustomDividerText, CustomDivider } from "../../components";
import { assetsIcons, GeneralStyles } from "../../../assets";
import HelpContent from "./HelpContent";
export default function HelpScreen() {
  const data = HelpContent();

  return (
    <SafeAreaView style={[GeneralStyles.container]}>
      <View style={[GeneralStyles.subContainer, { flex: 1 }]}>
        <View style={{ width: "100%", flex: 1 }}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            endFillColor="#000"
            keyExtractor={(item) => item.id.toString()}
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
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
