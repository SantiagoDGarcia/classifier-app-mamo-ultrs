//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./app/navigation/Navigator";
import LoginScreen from "./app/screens/Login"

import { StatusBar } from 'react-native';
import colors from './assets/theme/colors.ts'

export default function App() {
  const auth = true;
  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor(colors.primary);

  return (
    <NavigationContainer>
      {auth ? <Navigation /> : <LoginScreen />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

