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

// Define the possible routes and their parameters for the HistNavigator
export type HistNavigatorParamList = {
  Hist: undefined;
  Results: {
    idResult: string;
    typeAnalysis: string;
  };
};

// Define the possible routes for the bottom tab navigator
export type BottomTabNavigatorParamList = {
  Profile: undefined;
  HistNav: HistNavigatorParamList;
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
  BottomTabNavigationProp<BottomTabNavigatorParamList, "HistNav">,
  NativeStackNavigationProp<HistNavigatorParamList>
>;

export type HelpScreenNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  "Help"
>;

export type LoginScreenNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  "UserLogin"
>;

export type RegisterScreenNavigationProp = BottomTabNavigationProp<
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
