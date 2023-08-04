import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DropDownPicker from "react-native-dropdown-picker";
import { ColorsTheme } from "../../assets";

export default function CustomLanguageSelector() {
  const { t, i18n } = useTranslation();

  const setLanguage = (code: string) => {
    return i18n.changeLanguage(code);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(i18n.language);
  const [items, setItems] = useState([
    { label: t("common:spanish"), value: "es" },
    { label: t("common:english"), value: "en" },
  ]);

  // Update items when the language changes
  useEffect(() => {
    setItems([
      { label: t("common:spanish"), value: "es" },
      { label: t("common:english"), value: "en" },
    ]);
  }, [i18n.language]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      theme="LIGHT"
      multiple={false}
      mode="BADGE"
      zIndex={1000}
      style={{ borderColor: "white" }}
      labelStyle={{ margin: -10, padding: 0 }}
      modalAnimationType="slide"
      listMode="MODAL"
      modalContentContainerStyle={{
        marginHorizontal: 15,
        marginVertical: 10,
      }}
      listItemContainerStyle={{
        marginVertical: 5,
      }}
      modalTitleStyle={{
        color: ColorsTheme.primary,
        fontWeight: "bold",
        paddingVertical: 20,
      }}
      listItemLabelStyle={{ fontWeight: "100", fontSize: 16 }}
      modalTitle={t("common:selectLanguage")!}
      modalProps={{ presentationStyle: "fullScreen" }}
      onChangeValue={() => setLanguage(value)}
    />
  );
}
