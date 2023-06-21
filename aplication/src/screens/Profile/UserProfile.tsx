import React, { useContext } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { GeneralStyles } from "../../../constants/styles";
// Custom components
import {
  CustomDivider,
  CustomRowText,
  CustomButton,
  CustomLink,
} from "../../components";
// Firebase

import { assetsIcons } from "../../../constants";
import AppContext from "../../../hooks/createContext";
import { logOut } from "../../services";

export default function UserScreen() {
  const {
    userData: [user],
  } = useContext(AppContext)!;

  return (
    <SafeAreaView style={GeneralStyles.container}>
      <View style={GeneralStyles.subContainer}>
        <Text style={GeneralStyles.labelTitle}>Mi perfil</Text>
        <View style={{ width: "100%" }}>
          <View style={{ marginBottom: 20 }}>
            <CustomRowText
              iconSource={assetsIcons.user}
              label="Nombre"
              description={user.name}
            />
            <CustomRowText
              iconSource={assetsIcons.email}
              label="Correo electrónico"
              description={user.email}
            />
            <CustomRowText
              iconSource={assetsIcons.organization}
              label="Organización"
              description={user.organization}
            />
            <CustomRowText
              iconSource={assetsIcons.calendar}
              label="Fecha de creación"
              description={user.createdAt}
            />
          </View>
          <CustomLink text=" Cambiar contraseña. " />
          <CustomButton
            text="Cerrar sesión"
            // disable={validator.isValid}
            onPress={() => logOut()}
          />
          <CustomDivider />
        </View>
      </View>
    </SafeAreaView>
  );
}
