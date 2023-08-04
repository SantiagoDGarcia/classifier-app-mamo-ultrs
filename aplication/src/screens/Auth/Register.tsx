import {
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import {
  CustomActivityIndicator,
  CustomButton,
  CustomLink,
  CustomLogoMedium,
  CustomTextInput,
} from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { assetsIcons, GeneralStyles, LoginStyles } from "../../../assets";
import { registerUserAuth } from "../../services";
import { useContext } from "react";
import AppContext from "../../hooks/createContext";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { RegisterScreenNavigationProp } from "../../navigation/types";

export default function RegisterScreen() {
  const {
    isLoading: [loading, setLoading],
  } = useContext(AppContext)!;
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const { t } = useTranslation();

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
      name: Yup.string().required(`${t("alert:enterName")}`),
      email: Yup.string()
        .email(`${t("alert:invalidEmail")}`)
        .required(`${t("alert:enterEmail")}`),
      password: Yup.string()
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^.&_()/*-]).{8,}$/,
          `${t("alert:passwordRequirements")}`
        )
        .min(8)
        .required(`${t("alert:enterPassword")}`),
      organization: Yup.string().required(`${t("alert:enterOrganization")}`),
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
        {loading && (
          <CustomActivityIndicator
            actionText={t("common:wait")}
            indicatorActive={loading}
          />
        )}
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
                {t("common:completeAllFields")}
              </Text>
            </View>
            <CustomTextInput
              value={formik.values.name}
              onChangeValue={(text) => formik.setFieldValue("name", text)}
              textPlaceholder={`${t("common:name")}`}
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
              textPlaceholder={`${t("common:email")}`}
              error={formik.errors.email}
              onBlur={() => formik.setFieldTouched("email")}
              stateOnBlur={formik.touched.email}
              icon={assetsIcons.email}
            />
            <CustomTextInput
              value={formik.values.password}
              onChangeValue={(text) => formik.setFieldValue("password", text)}
              textPlaceholder={`${t("common:password")}`}
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
              textPlaceholder={`${t("common:organization")}`}
              error={formik.errors.organization}
              onBlur={() => formik.setFieldTouched("organization")}
              stateOnBlur={formik.touched.organization}
              icon={assetsIcons.organization}
            />
            <CustomButton
              text={`${t("common:register")}`}
              onPress={formik.handleSubmit}
            />
            <CustomLink
              text={` ${t("common:alreadyHaveAccount")} `}
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
