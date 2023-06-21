// import React from "react";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Text,
  View,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { GeneralStyles, LoginStyles } from "../../../constants/styles";
// Custom components
import {
  CustomButton,
  CustomLink,
  CustomTextInput,
  CustomLogo,
  CustomActivityIndicator,
} from "../../components";
import { assetsIcons } from "../../../constants";
import AppContext from "../../../hooks/createContext";
import { loginUser } from "../../services";

export default function LoginScreen({ navigation }: any) {
  const {
    isLoading: [loading, setLoading],
  } = useContext(AppContext)!;

  const validator = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    initialTouched: {
      email: false,
      password: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Correo electrónico inválido. Verifique")
        .required("Ingrese su correo electrónico."),
      password: Yup.string().required("Ingrese su contraseña."),
    }),
    onSubmit: (values) => {
      setLoading(true);
      loginUser(values.email, values.password);
      setTimeout(() => {
        setLoading(false);
      }, 400);
    },
  });

  return (
    <SafeAreaView style={LoginStyles.LoginContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1, minHeight: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {loading && <CustomActivityIndicator actionText="Espere..." />}
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1 }}
          accessible={false}
        >
          <View style={{ flex: 1 }}>
            <View style={LoginStyles.LoginSubContainer}>
              <CustomLogo color="black" />
              <CustomTextInput
                value={validator.values.email}
                onChangeValue={(text) =>
                  validator.setFieldValue("email", text.replace(" ", ""))
                }
                textPlaceholder={"Correo electrónico"}
                error={validator.errors.email}
                onBlur={() => validator.setFieldTouched("email")}
                stateOnBlur={validator.touched.email}
                icon={assetsIcons.email}
              />
              <CustomTextInput
                value={validator.values.password}
                onChangeValue={(text) =>
                  validator.setFieldValue("password", text)
                }
                textPlaceholder={"Contraseña"}
                error={validator.errors.password}
                secureTextEntry={true}
                onBlur={() => validator.setFieldTouched("password")}
                stateOnBlur={validator.touched.password}
                icon={assetsIcons.padlock}
              />
              <CustomButton
                text="Iniciar sesión"
                //disable={!validator.isValid}
                onPress={validator.handleSubmit}
              />
              <CustomLink
                text=" ¿No tienes cuenta? Registrate."
                onPress={() => navigation.navigate("UserRegister")}
              />
              <CustomLink text=" ¿Olvidaste tu contraseña? " />
            </View>
            <View style={GeneralStyles.footer}>
              <Text style={GeneralStyles.textDescription} numberOfLines={2}>
                Todos los derechos reservados y pertenecientes a la Universidad
                Tecnica Particular de Loja.
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
