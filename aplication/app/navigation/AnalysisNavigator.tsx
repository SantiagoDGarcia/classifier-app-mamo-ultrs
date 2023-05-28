import { createStackNavigator } from "@react-navigation/stack";
// Custom components
import { NavIcon } from "../components/CustomNavIcon";
import { NavHeader } from "../components/CustomNavHeader";
import CustomLogo from '../components/CustomLogo'
import { Text, View, Image, Pressable, TouchableHighlight } from 'react-native';

// Screens
import AnalysisScreen from "../screens/Analysis"
import TestScreen from "../screens/interns/Test"
import ResultsScreen from "../screens/interns/Results"

const MainNavScreen = "Analysis"
const SecondNavScreen = "Test"
const ThirdNavScreen = "Results"

const TabStack = createStackNavigator()

export default function AnalysisNavigation() {
    return (
        <TabStack.Navigator
        >
            <TabStack.Screen
                name={MainNavScreen}
                component={AnalysisScreen}
                options={{
                    headerShown: true,
                    headerBackTitleVisible: false,
                    header: ({ route, navigation }) => (
                        <NavHeader />
                    )
                }}
            />
            <TabStack.Screen
                name={SecondNavScreen}
                component={TestScreen}
            // options={{
            //     headerTitle: () => (
            //         <View style={{ alignSelf: 'center', }}>
            //             <CustomLogo color='black' />
            //         </View>
            //     ),
            //     headerTitleStyle: { alignSelf: 'center', width: '90%', backgroundColor: 'green' },
            //     headerBackTitleVisible: false,
            // }}
            />
            <TabStack.Screen
                name={ThirdNavScreen}
                component={ResultsScreen}
            // options={{
            //     headerTitle: () => (
            //         <View style={{ alignSelf: 'center', }}>
            //             <CustomLogo color='black' />
            //         </View>
            //     ),

            //     headerTitleStyle: { alignSelf: 'center', width: '90%', backgroundColor: 'green' },
            //     headerBackTitleVisible: false,
            // }}
            />
        </TabStack.Navigator>
    );
}
