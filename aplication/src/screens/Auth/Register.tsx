import {
  Text,
  View,
  Image,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { GeneralStyles, LoginStyles } from "../../../constants/styles";
// Custom components
import {
  CustomActivityIndicator,
  CustomButton,
  CustomLink,
  CustomLogoMedium,
  CustomTextInput,
} from "../../components";
import { assetsIcons } from "../../../constants";
import { registerUserAuth } from "../../services";
import { useContext } from "react";
import AppContext from "../../../hooks/createContext";
/*
type props ={
  ((email: string, password: string, name: string, history: any) => Promise<void>)[]
}
*/

export default function RegisterScreen({ navigation }: any) {
  const {
    isLoading: [loading, setLoading],
  } = useContext(AppContext)!;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      organization: "",
    },
    initialTouched: {
      name: false,
      email: false,
      password: false,
      organization: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ingrese su nombre."),
      email: Yup.string()
        .email("Correo electrónico inválido. Verifique")
        .required("Ingrese su correo electrónico."),
      password: Yup.string()
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^.&_()/*-]).{8,}$/,
          "La contraseña debe contener al menos 8 caracteres, una letra mayuscula, una letra minuscula y un caracter especial."
        )
        .min(8)
        .required("Ingrese la contraseña."),
      organization: Yup.string().required(
        "Ingrese la organización a la que pertenece."
      ),
    }),
    onSubmit: (values) => {
      setLoading(true);
      registerUserAuth(
        values.email,
        values.password,
        values.name,
        values.organization
      );
      setTimeout(() => {
        setLoading(false);
      }, 400);
    },
  });

  return (
    <SafeAreaView style={LoginStyles.LoginContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={LoginStyles.LoginSubContainer}
      >
        {loading && <CustomActivityIndicator actionText="Espere..." />}
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 0 }}>
            <CustomLogoMedium />
            <View
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text style={GeneralStyles.textDescription}>
                Completa todos los campos para registrarse.
              </Text>
            </View>
            <CustomTextInput
              value={formik.values.name}
              onChangeValue={(text) => formik.setFieldValue("name", text)}
              textPlaceholder={"Nombre"}
              error={formik.errors.name}
              onBlur={() => formik.setFieldTouched("name")}
              stateOnBlur={formik.touched.name}
              icon={assetsIcons.user}
            />
            <CustomTextInput
              value={formik.values.email}
              onChangeValue={(text) =>
                formik.setFieldValue("email", text.replace(" ", ""))
              }
              textPlaceholder={"Correo electrónico"}
              error={formik.errors.email}
              onBlur={() => formik.setFieldTouched("email")}
              stateOnBlur={formik.touched.email}
              icon={assetsIcons.email}
            />
            <CustomTextInput
              value={formik.values.password}
              onChangeValue={(text) => formik.setFieldValue("password", text)}
              textPlaceholder={"Contraseña"}
              error={formik.errors.password}
              secureTextEntry={true}
              onBlur={() => formik.setFieldTouched("password")}
              stateOnBlur={formik.touched.password}
              icon={assetsIcons.padlock}
            />
            <CustomTextInput
              value={formik.values.organization}
              onChangeValue={(text) =>
                formik.setFieldValue("organization", text)
              }
              textPlaceholder={"Organización"}
              error={formik.errors.organization}
              onBlur={() => formik.setFieldTouched("organization")}
              stateOnBlur={formik.touched.organization}
              icon={assetsIcons.organization}
            />
            <CustomButton text="Registrarse" onPress={formik.handleSubmit} />
            <CustomLink
              text=" ¿Ya tienes cuenta? Inicia sesión."
              onPress={() => navigation.navigate("UserLogin")}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      {/* <View style={[GeneralStyles.subContainer, { flex: 1 }]}>
        <Text style={GeneralStyles.textDescription}>
          Todos los derechos reservados y pertenecientes a la Universidad
          Tecnica Particular de Loja.
        </Text>
      </View> */}
    </SafeAreaView>
  );
}
