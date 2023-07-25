import { createStackNavigator } from "@react-navigation/stack";
import { CustomNavHeader } from "../components/";
import { AnalysisScreen, ResultsScreen, TestScreen } from "../screens/";
import { AnalysisNavigatorParamList } from "./types";

const TabStack = createStackNavigator<AnalysisNavigatorParamList>();

export default function AnalysisNavigation() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <CustomNavHeader navigation={navigation} />
          ),
        }}
      />
      <TabStack.Screen
        name="Test"
        component={TestScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "",
          header: ({ navigation }) => (
            <CustomNavHeader back navigation={navigation} />
          ),
        }}
      />
      <TabStack.Screen
        name="Results"
        component={ResultsScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "",
          header: ({ navigation }) => (
            <CustomNavHeader back navigation={navigation} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
}
