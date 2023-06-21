import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
// Custom components
import {
  CustomNavIcon,
  CustomNavHeader,
  LanguageSelector,
} from "../components";
// Screens
import {
  RegisterScreen,
  LoginScreen,
  HelpScreen,
  HistScreen,
  UserScreen,
} from "../screens";
import { AnalysisNavigation } from "./";
import { NavStyles } from "../../constants";
import { BottomTabNavigatorParamList } from "./types";
import AppContext from "../../hooks/createContext";

const TabStack = createBottomTabNavigator<BottomTabNavigatorParamList>();

export default function MainNavigation() {
  const navigation = useNavigation();
  const [activeCredentials, setActiveCredentials] = useState(false);
  const {
    userData: [user, setUser],
  } = useContext(AppContext)!;
  // const routes = useNavigationState((state) => state.routes);
  // const currentRoute = routes[0].name;
  // const state = useNavigationState((state) => state);
  // const routeName = state.routeNames[state.index];
  //const { t } = useTranslation();
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      console.log("__Onauthchang");
      //const route = navigationRef.current?.getCurrentRoute(); //current route object
      //const currentScreen = route.name; // current screen name
      //console.log(currentScreen);
      //console.log("currentRoute: ", routeName);
      if (user) {
        //console.log("____USER____", user);
        var date = new Date(user.metadata.creationTime!);
        setUser({
          name: "Santiago García",
          email: user.email,
          createdAt: date.toLocaleDateString(),
          organization: "Universidad Técnica Particular de Loja",
        });
        setActiveCredentials(true);
      } else {
        setActiveCredentials(false);
      }
    });
  }, []);
  return (
    <TabStack.Navigator
      //initialRouteName={activeCredentials ? "AnalisisNav" : "UserLogin"}
      backBehavior={"history"}
      screenOptions={{
        tabBarStyle: NavStyles.tabStyle,
        tabBarActiveTintColor: "black",
        header: ({ route, navigation }) => <CustomNavHeader />,
      }}
    >
      {activeCredentials ? (
        <TabStack.Group navigationKey={activeCredentials ? "user" : "guest"}>
          <TabStack.Screen
            name={"Profile"}
            component={UserScreen}
            // initialParams
            options={{
              tabBarLabel: "Mi perfil",
              tabBarLabelStyle: NavStyles.tabLabelStyle,
              tabBarIcon: ({ focused }) =>
                CustomNavIcon("account-circle", 23, focused),
            }}
          />
          <TabStack.Screen
            name={"Hist"}
            component={HistScreen}
            options={{
              tabBarLabel: "Historial",
              tabBarLabelStyle: NavStyles.tabLabelStyle,
              tabBarIcon: ({ focused }) =>
                CustomNavIcon("progress-clock", 23, focused),
            }}
          />
          <TabStack.Screen
            name={"AnalysisNav"}
            component={AnalysisNavigation}
            options={{
              tabBarLabel: "Análisis",
              headerShown: false,
              tabBarLabelStyle: NavStyles.tabLabelStyle,
              tabBarIcon: ({ focused }) =>
                CustomNavIcon("select-search", 23, focused),
            }}
          />
          <TabStack.Screen
            name={"Help"}
            component={HelpScreen}
            options={{
              tabBarLabel: "Ayuda",
              tabBarLabelStyle: NavStyles.tabLabelStyle,
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                CustomNavIcon("help-circle", 23, focused), //<Icon name="image-search" size={24} color="red" />//<MaterialIcons name={''} size={24} color={"black"} />//<MaterialCommunityIcons name="finance" size={24} color="black" />
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
