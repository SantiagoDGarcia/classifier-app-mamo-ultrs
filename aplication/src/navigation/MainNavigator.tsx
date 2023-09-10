import {
  RegisterScreen,
  LoginScreen,
  HelpScreen,
  UserScreen,
} from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { useContext } from "react";
import { CustomNavIcon, CustomNavHeader } from "../components";
import { AnalysisNavigation, HistNavigation } from "./";
import { NavStyles } from "../../assets";
import { BottomTabNavigatorParamList } from "./types";
import { AppContext } from "../hooks";
import { observerAuth } from "../services";
import { useTranslation } from "react-i18next";

const TabStack = createBottomTabNavigator<BottomTabNavigatorParamList>();

export default function MainNavigation() {
  const {
    userData: [user],
  } = useContext(AppContext)!;
  observerAuth();
  const { t } = useTranslation();
  return (
    <TabStack.Navigator
      //initialRouteName={activeCredentials ? "AnalisisNav" : "UserLogin"}
      backBehavior={"order"}
      screenOptions={{
        tabBarStyle: NavStyles.tabStyle,
        tabBarActiveTintColor: "black",
        tabBarHideOnKeyboard: Platform.OS !== "ios",
        header: ({ navigation }) => <CustomNavHeader navigation={navigation} />,
      }}
    >
      {user ? (
        <TabStack.Group navigationKey={user ? "user" : "guest"}>
          <TabStack.Screen
            name={"Profile"}
            component={UserScreen}
            // initialParams
            options={{
              tabBarLabel: `${t("navigate:profile")}`,
              tabBarLabelStyle: NavStyles.tabLabelStyle,
              tabBarIcon: ({ focused }) =>
                CustomNavIcon({
                  name: "account-circle",
                  focused: focused,
                }),
            }}
          />
          <TabStack.Screen
            name={"HistNav"}
            component={HistNavigation}
            options={{
              tabBarLabel: `${t("navigate:history")}`,
              headerShown: false,
              tabBarLabelStyle: NavStyles.tabLabelStyle,
              tabBarIcon: ({ focused }) =>
                CustomNavIcon({
                  name: "progress-clock",
                  focused: focused,
                }),
            }}
          />
          <TabStack.Screen
            name={"AnalysisNav"}
            component={AnalysisNavigation}
            options={{
              tabBarLabel: `${t("navigate:analysis")}`,
              headerShown: false,
              tabBarLabelStyle: NavStyles.tabLabelStyle,
              tabBarIcon: ({ focused }) =>
                CustomNavIcon({
                  name: "select-search",
                  focused: focused,
                }),
            }}
          />
          <TabStack.Screen
            name={"Help"}
            component={HelpScreen}
            options={{
              tabBarLabel: `${t("navigate:help")}`,
              tabBarLabelStyle: NavStyles.tabLabelStyle,
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                CustomNavIcon({
                  name: "help-circle",
                  focused: focused,
                }),
            }}
          />
        </TabStack.Group>
      ) : (
        <TabStack.Group>
          <TabStack.Screen
            name={"UserLogin"}
            component={LoginScreen}
            options={{
              headerShown: false,
              tabBarStyle: NavStyles.authTabStyle,
              headerTitle: "",
            }}
          />
          <TabStack.Screen
            name={"UserRegister"}
            component={RegisterScreen}
            options={{
              headerShown: false,
              tabBarStyle: NavStyles.authTabStyle,
              headerTitle: "",
            }}
          />
        </TabStack.Group>
      )}
    </TabStack.Navigator>
  );
}
