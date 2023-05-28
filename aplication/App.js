import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./app/navigation/MainNavigator";
import CredentialsNavigation from "./app/navigation/CredentialsNavigator";

import { StatusBar } from 'react-native';
import colors from './assets/theme/colors.ts'

export default function App() {
  const authorized = true;
  // StatusBar.s('light-content', true);
  StatusBar.setBackgroundColor(colors.primary);
  return (
    <NavigationContainer>
      {authorized ? <MainNavigation /> : <CredentialsNavigation />}
    </NavigationContainer>
  );
}

