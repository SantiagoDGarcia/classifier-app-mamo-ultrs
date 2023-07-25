import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DropDownPicker from "react-native-dropdown-picker";

export default function CustomLanguageSelector() {
  const { t, i18n } = useTranslation();

  const setLanguage = (code: string) => {
    return i18n.changeLanguage(code);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(i18n.language);
  const [items, setItems] = useState([
    { label: "Español", value: "es" },
    { label: "English", value: "en" },
  ]);

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
      style={{ position: "relative", zIndex: 100, borderColor: "white" }}
      labelStyle={{ margin: -10, padding: 0 }}
      modalAnimationType="slide"
      listMode="MODAL"
      onChangeValue={() => setLanguage(value)}
    />
  );
}
