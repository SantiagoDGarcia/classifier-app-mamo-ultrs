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
  CustomFullScreenInfo,
  CustomLink,
  CustomLogoMedium,
  CustomTermsConditions,
  CustomTextInput,
} from "../../components";
import {
  assetsIcons,
  ColorsTheme,
  GeneralStyles,
  LoginStyles,
} from "../../../assets";
import { registerUserAuth } from "../../services";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext } from "react";
import { AppContext } from "../../hooks";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { RegisterScreenNavigationProp } from "../../navigation/types";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
      acceptTerms: false,
    },
    initialTouched: {
      name: false,
      email: false,
      password: false,
      organization: false,
      acceptTerms: false,
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
      acceptTerms: Yup.bool().oneOf([true], `${t("alert:errorAcceptTerms")}`),
    }),
    onSubmit: (values) => {
      setLoading(true);
      registerUserAuth({
        email: values.email,
        password: values.password,
        name: values.name,
        organization: values.organization,
      });
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
            <View style={LoginStyles.LoginRegisterView}>
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
            <View style={[LoginStyles.LoginRegisterView, { marginBottom: 10 }]}>
              <View style={LoginStyles.checkContainer}>
                <BouncyCheckbox
                  onPress={(pressed: boolean) =>
                    formik.setFieldValue("acceptTerms", pressed)
                  }
                  fillColor={ColorsTheme.primary}
                />
                <Text>{`${t("common:iAcceptTerms")}`}</Text>
                <CustomFullScreenInfo
                  actionableText={`${t("common:termsandConditions")}`}
                  titlecustomView={`${t("common:termsandConditions")}`}
                  customView={<CustomTermsConditions />}
                />
              </View>
              <Text style={LoginStyles.showError}>
                {formik.errors.acceptTerms}
              </Text>
            </View>
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
    </SafeAreaView>
  );
}
