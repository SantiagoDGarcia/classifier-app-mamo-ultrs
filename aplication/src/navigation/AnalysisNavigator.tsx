import { createStackNavigator } from "@react-navigation/stack";
// Custom components
import { CustomNavHeader } from "../components/";
// Screens
import { AnalysisScreen, ResultsScreen, TestScreen } from "../screens/";
import { AnalysisNavigatorParamList } from "./types";

const TabStack = createStackNavigator<AnalysisNavigatorParamList>();

export default function AnalysisNavigation() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name={"Analysis"}
        component={AnalysisScreen}
        options={{
          headerShown: true,
          header: ({}) => <CustomNavHeader />,
        }}
      />
      <TabStack.Screen
        name={"Test"}
        component={TestScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "",
          header: ({}) => <CustomNavHeader back={true} />,
        }}
      />
      <TabStack.Screen
        name={"Results"}
        component={ResultsScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "",
          header: ({}) => <CustomNavHeader back={true} />,
        }}
      />
    </TabStack.Navigator>
  );
}
