import type {
  CompositeNavigationProp,
  RouteProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type AnalysisNavigatorParamList = {
  Analysis: undefined;
  //   Test: {
  //     typeAnalysis: string;
  //   };
  Test: undefined;
  Results: {
    id: string;
    typeAnalysis: string;
  };
};

export type BottomTabNavigatorParamList = {
  Profile: undefined;
  Hist: undefined;
  AnalysisNav: AnalysisNavigatorParamList;
  Help: undefined;
  UserLogin: undefined;
  UserRegister: undefined;
};

export type AnalysisScreenProp = NativeStackNavigationProp<
  AnalysisNavigatorParamList,
  "Analysis"
>;

export type HistScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParamList, "Hist">,
  NativeStackNavigationProp<AnalysisNavigatorParamList, "Test">
>;

/*
export type HistScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParamList, "Hist">,
  NativeStackNavigationProp<AnalysisNavigatorParamList>
>;
*/
export type DetailsScreenRouteProp = RouteProp<
  AnalysisNavigatorParamList,
  "Test"
>;
