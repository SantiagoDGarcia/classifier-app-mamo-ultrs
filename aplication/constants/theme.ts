import { Platform, StyleSheet, StatusBar, Dimensions } from "react-native";

const { fontScale, scale } = Dimensions.get("window"); // import useWindowDimensions()

//const styles = makeStyles(fontScale);
function fontssad() {
  //return fontScale; // import useWindowDimensions()
  console.log(Dimensions.get("window"));
}
export const COLORS: TypeColor = {
  primary: "#D17357", //#AB482A
  secondary: "#C45942",
  tertiary: "#FFF8F7",
  gray: "gray",
};
fontssad();
export const SIZES: TypeSize = {
  base: 8,
  small: 13,
  normal: fontScale < 1 ? 20 : 18 * fontScale,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "RobotoBold",
  //semiBold: "RobotoSemiBold",
  medium: "RobotoMedium",
  regular: "RobotoRegular",
  light: "RobotoLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
