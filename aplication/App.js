import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CustomStatusBar } from "./src/components";
import { useFonts } from "expo-font";
import { navigationRef } from "./src/navigation/NavigationRouter";
import { assetsFonts } from "./constants";
import { Text, TextInput } from "react-native";
import AppContextProvider from "./hooks/context";
import { Host } from "react-native-portalize";
import "./src/helpers/languageDetector";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 0.8;
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultiplier = 1;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [loaded] = useFonts({
    RobotoBold: assetsFonts.RobotoBold,
    RobotoMediumBold: assetsFonts.RobotoMediumBold,
    RobotoRegularBold: assetsFonts.RobotoRegularBold,
    RobotoLightBold: assetsFonts.RobotoLightBold,
  });

  if (!loaded) return null;

  function handleNavigationRef(ref) {
    navigationRef.current = ref;
  }

  return (
    <Host>
      <AppContextProvider>
        <SafeAreaProvider>
          <NavigationContainer theme={theme} ref={handleNavigationRef}>
            <CustomStatusBar />
            <MainNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </AppContextProvider>
    </Host>
  );
}
