//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./app/navigation/Navigator";
import LoginScreen from "./app/screens/Login"

import { StatusBar } from 'react-native';
import colors from './assets/theme/colors.ts'

export default function App() {
  const authorized = true;
  // StatusBar.s('light-content', true);
  StatusBar.setBackgroundColor(colors.primary);

  return (
    <NavigationContainer>
      {authorized ? <Navigation /> : <LoginScreen />}
    </NavigationContainer>
  );
}

