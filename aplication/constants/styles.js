import { Platform, StyleSheet, StatusBar, Dimensions } from "react-native";
import { COLORS } from "./theme";
import { SIZES } from "./theme";

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
        width: "100%",
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
    fontSize: SIZES.normal,
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
    color: COLORS.primary,
    margin: 25,
  },
  labelSubtitle: {
    fontSize: 15 - 1,
    color: COLORS.primary,
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
    borderColor: COLORS.primary,
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
    color: COLORS.primary,
    fontSize: 15,
    margin: 7,
  },
  rowTextContainer: {
    flexDirection: "row",
    marginBottom: 10,
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
    backgroundColor: COLORS.primary,
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
    backgroundColor: COLORS.primary,
    height: 60,
    marginTop: STATUSBAR_HEIGHT,
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  images: {
    width: 66,
    height: 66,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 7,
  },
  labelStats: {
    fontSize: SIZES.small,
  },
  infoStats: {
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
});

// Analysis
export const AnalysisStyles = StyleSheet.create({
  resultsSubContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  resultsContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 30,
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
  },
  subContainer: {
    backgroundColor: "white",
    padding: 20,
    borderColor: COLORS.tertiary,
    borderWidth: 1,
    borderRadius: 7,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    ...Platform.select({
      ios: {
        elevation: 0,
        shadowColor: "#5E5C5C",
      },
      android: {
        elevation: 10,
        shadowColor: "#171717",
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
    borderColor: COLORS.primary,
    borderWidth: 1,
    width: "80%",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        elevation: 0,
        shadowColor: "#5E5C5C",
      },
      android: {
        elevation: 10,
        shadowColor: "#171717",
      },
    }),
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height * 0.25,
    opacity: 0.9,
    borderRadius: 7,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  titleRight: {
    padding: 12,
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    borderRadius: 8,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: COLORS.primary,
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
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: COLORS.primary,
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
    borderBottomColor: COLORS.primary,
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
