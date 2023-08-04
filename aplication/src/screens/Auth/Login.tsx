// import React from "react";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { GeneralStyles, LoginStyles, assetsIcons } from "../../../assets";
import {
  CustomButton,
  CustomLink,
  CustomTextInput,
  CustomLogo,
  CustomActivityIndicator,
} from "../../components";
import AppContext from "../../hooks/createContext";
import { loginUser, sendEmailOnReset } from "../../services";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../navigation/types";

export default function LoginScreen() {
  const {
    isLoading: [loading, setLoading],
  } = useContext(AppContext)!;
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [resetPassword, setResetPassword] = useState(false);
  const [emailToReset, setEmailToReset] = useState("");
  const { t } = useTranslation();

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
        .email(` ${t("alert:invalidEmail")} `)
        .required(` ${t("alert:enterEmail")} `),
      password: Yup.string().required(` ${t("alert:enterPassword")} `),
    }),
    onSubmit: (values) => {
      setLoading(true);
      loginUser(values.email, values.password).finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 500)
      );
    },
  });

  return (
    <SafeAreaView style={LoginStyles.LoginContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1, minHeight: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {loading && (
          <CustomActivityIndicator
            actionText={t("alert:wait")}
            indicatorActive={loading}
          />
        )}
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1 }}
          accessible={false}
        >
          <View style={{ flex: 1 }}>
            <View style={LoginStyles.LoginSubContainer}>
              <CustomLogo color="black" />
              {!resetPassword ? (
                <>
                  <CustomTextInput
                    value={validator.values.email}
                    onChangeValue={(text) =>
                      validator.setFieldValue("email", text.replace(" ", ""))
                    }
                    textPlaceholder={`${t("common:email")}`}
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
                    textPlaceholder={`${t("common:password")}`}
                    error={validator.errors.password}
                    secureTextEntry
                    onBlur={() => validator.setFieldTouched("password")}
                    stateOnBlur={validator.touched.password}
                    icon={assetsIcons.padlock}
                  />
                  <CustomButton
                    text={`${t("common:login")}`}
                    //disable={!validator.isValid}
                    onPress={validator.handleSubmit}
                  />
                  <CustomLink
                    text={` ${t("common:noAccount")} `}
                    onPress={() => navigation.navigate("UserRegister")}
                  />
                  <CustomLink
                    text={` ${t("common:forgotPassword")} `}
                    onPress={() => setResetPassword(true)}
                  />
                </>
              ) : (
                <>
                  <Text
                    style={[
                      GeneralStyles.textDescription,
                      {
                        textAlign: "center",
                        marginVertical: 10,
                      },
                    ]}
                  >
                    {t("common:enterEmail")}
                  </Text>
                  <CustomTextInput
                    value={emailToReset}
                    onChangeValue={(text) =>
                      setEmailToReset(text.replace(" ", ""))
                    }
                    textPlaceholder={`${t("common:email")}`}
                    icon={assetsIcons.email}
                  />
                  <CustomButton
                    text={`${t("common:reset")}`}
                    onPress={() => sendEmailOnReset(emailToReset)}
                  />
                  <CustomLink
                    text={` ${t("common:cancel")} `}
                    onPress={() => setResetPassword(false)}
                  />
                </>
              )}
            </View>
            <View style={GeneralStyles.footer}>
              <Text style={GeneralStyles.textDescription} numberOfLines={2}>
                {t("common:allRightsReserved")}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
