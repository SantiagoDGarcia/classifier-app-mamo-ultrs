import React, { useContext, useState } from "react";
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
  CustomDivider,
  CustomHorizontalRow,
  CustomButton,
  CustomLink,
  CustomActivityIndicator,
  CustomTextInput,
} from "../../components";
import { GeneralStyles, assetsIcons } from "../../../assets";
import AppContext from "../../hooks/createContext";
import { logOut } from "../../services";
import { useFormik } from "formik";
import * as Yup from "yup";
import { changeUserPassword } from "../../services";
import { useTranslation } from "react-i18next";

export default function UserScreen() {
  const {
    userData: [user],
    isLoading: [loading, setLoading],
  } = useContext(AppContext)!;
  const { t } = useTranslation();
  const [changePassword, setChangePassword] = useState(false);
  const [activityMessage, setActivityMessage] = useState(
    `${t("alert:closeSession")}`
  );

  const validator = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    initialTouched: {
      oldPassword: false,
      newPassword: false,
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .required(`${t("alert:enterCurrentPassword")}`)
        .min(8, `${t("alert:minimumCharacters")}`),
      newPassword: Yup.string()
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^.&_()/*-]).{8,}$/,
          `${t("alert:passwordRequirements")}`
        )
        .min(8)
        .required(`${t("alert:enterNewPassword")}`),
    }),
    onSubmit: (values, onSubmitProps) => {
      setActivityMessage(`${t("alert:updatingPassword")}`);
      setLoading(true);
      changeUserPassword(values.oldPassword, values.newPassword).finally(() => {
        setLoading(false);
        setActivityMessage(`${t("alert:closeSession")}`);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        setChangePassword(false);
      });
    },
  });

  return (
    <SafeAreaView style={GeneralStyles.container}>
      {loading && (
        <CustomActivityIndicator
          indicatorActive={loading}
          actionText={activityMessage}
        />
      )}
      <View style={GeneralStyles.subContainer}>
        <Text style={GeneralStyles.labelTitle}>{t("common:myProfile")}</Text>
        <View style={{ width: "100%" }}>
          {!changePassword ? (
            <View style={{ marginBottom: 20 }}>
              <CustomHorizontalRow
                isText
                iconSource={assetsIcons.user}
                label={t("common:name")!}
                description={user.name}
              />
              <CustomHorizontalRow
                isText
                iconSource={assetsIcons.email}
                label={t("common:email")!}
                description={user.email}
              />
              <CustomHorizontalRow
                isText
                iconSource={assetsIcons.organization}
                label={t("common:organization")!}
                description={user.organization}
              />
              <CustomHorizontalRow
                isText
                iconSource={assetsIcons.calendar}
                label={t("common:creationDate")!}
                description={user.createdAt}
              />
              <CustomHorizontalRow
                iconSource={assetsIcons.language}
                label={t("common:language")!}
                description={user.createdAt}
              />
              <CustomLink
                text={` ${t("common:changePassword")} `}
                onPress={() => setChangePassword(true)}
              />
              <CustomButton
                text={t("common:logout")}
                onPress={() => {
                  setLoading(true);
                  setTimeout(() => {
                    logOut();
                    setLoading(false);
                  }, 350);
                }}
              />
            </View>
          ) : (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                style={{ flex: 1 }}
                accessible={false}
              >
                <View>
                  <Text style={{ textAlign: "center" }}>
                    {t("common:completeFieldsToResetPassword")}
                  </Text>
                  <CustomTextInput
                    value={validator.values.oldPassword}
                    onChangeValue={(text) =>
                      validator.setFieldValue("oldPassword", text)
                    }
                    textPlaceholder={`${t("common:currentPassword")}`}
                    error={validator.errors.oldPassword}
                    secureTextEntry={true}
                    onBlur={() => validator.setFieldTouched("oldPassword")}
                    stateOnBlur={validator.touched.oldPassword}
                  />
                  <CustomTextInput
                    value={validator.values.newPassword}
                    onChangeValue={(text) =>
                      validator.setFieldValue("newPassword", text)
                    }
                    textPlaceholder={`${t("common:newPassword")}`}
                    error={validator.errors.newPassword}
                    secureTextEntry={true}
                    onBlur={() => validator.setFieldTouched("newPassword")}
                    stateOnBlur={validator.touched.newPassword}
                  />
                  <CustomButton
                    text={`${t("common:modify")}`}
                    onPress={validator.handleSubmit}
                  />
                  <CustomLink
                    text={` ${t("common:cancel")} `}
                    onPress={() => {
                      setChangePassword(false);
                      validator.resetForm();
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          )}
          <View style={{ marginTop: 10 }}>
            <CustomDivider />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
