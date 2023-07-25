import { Platform, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Colo, ColorsTheme } from "./theme";
import { SizesTheme } from "./theme";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

// General
export const GeneralStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    padding: 1,
    paddingTop: 0,
    flex: 1,
  },
  subContainer: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
  footer: {
    alignSelf: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        width: "90%",
        paddingBottom: "12%",
      },
      android: {
        width: "95%",
        paddingBottom: "7%",
      },
    }),
  },
  logotipe: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  logotipeText: {
    padding: 5,
    fontSize: SizesTheme.normal,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    fontWeight: "bold",
    //fontFamily: "Roboto",
  },
  logotipeImg: {
    width: 28,
    height: 28,
  },
  labelTitle: {
    fontSize: 15 + 1,
    color: ColorsTheme.primary,
    margin: 25,
  },
  labelSubtitle: {
    fontSize: 15 - 1,
    color: ColorsTheme.primary,
  },
  infoText: {
    overflow: "hidden",
    color: "white",
    paddingHorizontal: 15,
    textAlign: "center",
    ...Platform.select({
      ios: {
        borderRadius: 9,
      },
      android: {
        borderRadius: 50,
      },
    }),
  },
  borderContainer: {
    borderColor: ColorsTheme.primary,
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: 7,
  },
  textDescription: {
    textAlign: "justify",
  },
  button: {
    paddingVertical: 9,
    borderRadius: 70,
    width: "45%",
    alignSelf: "center",
    margin: 12,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonLink: {
    minWidth: "50%",
    alignItems: "center",
    alignSelf: "center",
    color: ColorsTheme.primary,
    fontSize: 15,
    margin: 7,
  },
  rowTextContainer: {
    flexDirection: "row",
    minHeight: 40,
    alignItems: "center",
  },
  rowTextIcon: {
    width: 12,
    height: 12,
    marginRight: 7,
  },
});

// Login
export const LoginStyles = StyleSheet.create({
  LoginContainer: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },
  LoginSubContainer: {
    height: "90%",
    justifyContent: "center",
    flex: 1,
  },
});

// Navbar
export const NavStyles = StyleSheet.create({
  navContainer: {
    backgroundColor: ColorsTheme.primary,
    justifyContent: "center",
    height: 70,
  },
  navSubContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  navArrowBack: {
    position: "absolute",
    left: 0,
    paddingLeft: 10,
  },
  tabStyle: {
    paddingVertical: 5,
    borderTopWidth: 0,
    elevation: 0,
    ...Platform.select({
      ios: {
        height: "13%",
      },
      android: {
        height: 70,
      },
    }),
  },
  authTabStyle: {
    display: "none",
  },
  tabLabelStyle: {
    fontSize: 13,
    marginBottom: 10,
  },
  tabIconStyle: {
    width: "65%",
    alignItems: "center",
    borderRadius: 15,
    padding: 3,
  },
});

// Hist
export const HistStyles = StyleSheet.create({
  navBar: {
    backgroundColor: ColorsTheme.primary,
    height: 60,
    marginTop: STATUSBAR_HEIGHT,
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subLeftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  subRightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
  images: {
    width: 80,
    height: 80,
    borderColor: ColorsTheme.primary,
    borderWidth: 1,
    borderRadius: 7,
  },
  labelStats: {
    fontSize: SizesTheme.small,
  },
  infoStats: {
    fontSize: SizesTheme.small,
    color: ColorsTheme.primary,
  },
  infoContainer: {
    width: "50%",
    justifyContent: "space-around",
    flex: 1,
  },
  imagesContainer: {
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-between",
    paddingRight: "4%",
  },
});

// Analysis
export const AnalysisStyles = StyleSheet.create({
  resultsSubContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  imgsContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
});

// Test
export const TestStyles = StyleSheet.create({
  selectImage: {
    width: 230,
    height: 230,
    margin: 25,
    backgroundColor: "#FFF8F7",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    width: "100%",
    marginTop: 15,
    justifyContent: "space-between",
  },
  cancelIcon: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  imagePreview: {
    width: 230,
    height: 230,
    opacity: 0.5,
  },
  checkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
});

// Alerts
export const AlertStyles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  subContainer: {
    backgroundColor: "white",
    padding: 20,
    borderColor: ColorsTheme.tertiary,
    borderWidth: 1,
    borderRadius: 7,
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
    ...Platform.select({
      ios: {
        elevation: 0,
        shadowColor: "#5E5C5C",
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 10,
        shadowColor: "#171717",
        shadowOpacity: 1,
      },
    }),
  },
  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
  },
});

// Cards
export const CardStyles = StyleSheet.create({
  layout: {
    marginVertical: 25,
    width: "100%",
  },
  container: {
    backgroundColor: "white",
    borderColor: ColorsTheme.primary,
    borderWidth: 1,
    width: "80%",
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        elevation: 0,
        shadowColor: "#5E5C5C",
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 10,
        shadowColor: "#171717",
        shadowOpacity: 1,
      },
    }),
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height * 0.25,
    opacity: 0.9,
    borderRadius: 7,
    borderColor: ColorsTheme.primary,
    borderWidth: 1,
  },
  titleRight: {
    padding: 12,
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    borderRadius: 8,
    borderColor: ColorsTheme.primary,
    borderWidth: 1,
    backgroundColor: ColorsTheme.primary,
    //
    position: "absolute",
    overflow: "hidden",
    left: 0,
    bottom: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  titleLeft: {
    padding: 12,
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    borderRadius: 8,
    borderColor: ColorsTheme.primary,
    borderWidth: 1,
    backgroundColor: ColorsTheme.primary,
    overflow: "hidden",
    //
    position: "absolute",
    right: 0,
    bottom: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
});

// TextInputs
export const TextInputsStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    paddingHorizontal: 7,
    borderBottomWidth: 1,
    borderBottomColor: ColorsTheme.primary,
    margin: 16,
    width: "90%",
    backgroundColor: "white",
    flex: 1,
  },
  error: {
    color: "#E40E00",
    width: "90%",
    alignSelf: "center",
    marginTop: -8,
    fontWeight: "500",
  },
  containerIcon: {
    backgroundColor: "white",
    padding: 8,
    paddingBottom: 6,
    position: "absolute",
    right: "3%",
  },
  icon: {
    width: 12,
    height: 12,
  },
});

export const FullScreenStyles = StyleSheet.create({
  exitIconContainer: {
    margin: 5,
    ...Platform.select({
      ios: {
        marginTop: 50,
      },
      android: {
        marginTop: 12,
      },
    }),
    height: "auto",
    width: "auto",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderRadius: 100,
    position: "absolute",
    zIndex: 2,
    right: 0,
  },
  exitIcon: {
    width: 30,
    height: 30,
  },
  maximizeIconContainer: {
    margin: 5,
    height: "auto",
    width: "auto",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
    right: 0,
    bottom: 0,
  },
  maximizeIcon: {
    width: 30,
    height: 30,
  },
});
