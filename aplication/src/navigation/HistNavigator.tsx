import { createStackNavigator } from "@react-navigation/stack";
import { HistScreen, ResultsScreen } from "../screens/";
import { CustomNavHeader } from "../components/";
import { HistNavigatorParamList } from "./types";

const TabStack = createStackNavigator<HistNavigatorParamList>();

export default function HistNavigation() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Hist"
        component={HistScreen}
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <CustomNavHeader navigation={navigation} />
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
