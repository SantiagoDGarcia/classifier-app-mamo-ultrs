import { Dimensions } from "react-native";

const { fontScale } = Dimensions.get("window"); // import useWindowDimensions()

export const ColorsTheme: TypeColor = {
  primary: "#D17357", //#AB482A
  secondary: "#C45942",
  tertiary: "#FFF8F7",
  positiveResult: "#539E2F",
  negativeResult: "#CF4747",
  gray: "gray",
};

export const SizesTheme: TypeSize = {
  base: 8,
  small: 13,
  normal: fontScale < 1 ? 20 : 18 * fontScale,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FontsTheme = {
  bold: "RobotoBold",
  //semiBold: "RobotoSemiBold",
  medium: "RobotoMedium",
  regular: "RobotoRegular",
  light: "RobotoLight",
};
