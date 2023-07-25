import type {
  CompositeNavigationProp,
  RouteProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

// Define the possible routes and their parameters for the AnalysisNavigator
export type AnalysisNavigatorParamList = {
  Analysis: undefined;
  Test: {
    typeAnalysis: string;
  };
  Results: {
    idResult: string;
    typeAnalysis: string;
  };
};

// Define the possible routes for the bottom tab navigator
export type BottomTabNavigatorParamList = {
  Profile: undefined;
  Hist: undefined;
  AnalysisNav: AnalysisNavigatorParamList;
  Help: undefined;
  UserLogin: undefined;
  UserRegister: undefined;
};

// Define the navigation props for each component
export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  "Profile"
>;

export type HistScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParamList, "Hist">,
  NativeStackNavigationProp<AnalysisNavigatorParamList>
>;

export type HelpScreenNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  "Help"
>;

export type UserLoginScreenNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  "UserLogin"
>;

export type UserRegisterScreenNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  "UserRegister"
>;

export type AnalysisScreenNavigationProp = BottomTabNavigationProp<
  AnalysisNavigatorParamList,
  "Analysis"
>;
export type TestScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParamList, "AnalysisNav">,
  NativeStackNavigationProp<AnalysisNavigatorParamList, "Test">
>;

export type ResultsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParamList, "AnalysisNav">,
  NativeStackNavigationProp<AnalysisNavigatorParamList, "Results">
>;

// Define the route props for each component
export type TestScreenRouteProp = RouteProp<AnalysisNavigatorParamList, "Test">;

export type ResultsScreenRouteProp = RouteProp<
  AnalysisNavigatorParamList,
  "Results"
>;
