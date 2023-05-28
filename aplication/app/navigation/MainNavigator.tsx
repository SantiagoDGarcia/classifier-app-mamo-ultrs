import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Custom components
import { NavIcon } from "../components/CustomNavIcon";
import { NavHeader } from "../components/CustomNavHeader";
// Screens
import UserScreen from "../screens/User"
import HistScreen from "../screens/Hist"
import AnalysisScreen from "../screens/Analysis"
import HelpScreen from "../screens/Help"
import TestScreen from "../screens/interns/Test"
import ResultsScreen from "../screens/interns/Results"
import AnalysisNavigation from './AnalysisNavigator';

const MainNavScreen = "AnalisisNav"
const SecondNavScreen = "Historial"
const ThirdNavScreen = "Mi perfil"
const FourthNavScreen = "Ayuda"
const FifthNavScreen = "Test"
const SixNavScreen = "Results"
const SevenNavScreen = "Store"
const EightNavScreen = "Feed"
const NineNavScreen = "Comments"

const TabStack = createBottomTabNavigator()

export default function MainNavigation() {
    return (
        <TabStack.Navigator
            initialRouteName={MainNavScreen}
            screenOptions={{
                tabBarStyle: {
                    height: 70,
                    paddingVertical: 5,
                    borderTopWidth: 0,
                    elevation: 0
                },
                tabBarActiveTintColor: 'black',
                header: ({ route, navigation }) => (
                    <NavHeader />
                )
            }}
        >
            <TabStack.Screen
                name={ThirdNavScreen}
                component={UserScreen}
                options={{
                    tabBarLabel: "Mi perfil",
                    tabBarLabelStyle: { fontSize: 13, marginBottom: 10 },
                    tabBarIcon: ({ focused }) => NavIcon('account-circle', 23, focused),
                }}
            />
            <TabStack.Screen
                name={SecondNavScreen}
                component={HistScreen}
                options={{
                    tabBarLabel: "Historial",
                    tabBarLabelStyle: { fontSize: 13, marginBottom: 10 },
                    tabBarIcon: ({ focused }) => NavIcon('progress-clock', 23, focused),
                }}
            />
            <TabStack.Screen
                name={MainNavScreen}
                component={AnalysisNavigation}
                options={{
                    tabBarLabel: "Análisis",
                    headerShown: false,

                    tabBarLabelStyle: { fontSize: 13, marginBottom: 10 },
                    tabBarIcon: ({ focused }) => NavIcon('select-search', 23, focused),
                }}
            />
            <TabStack.Screen
                name={FourthNavScreen}
                component={HelpScreen}
                options={{
                    tabBarLabel: "Ayuda",
                    tabBarLabelStyle: { fontSize: 13, marginBottom: 10 },
                    headerShown: false,
                    tabBarIcon: ({ focused }) => NavIcon('help-circle', 23, focused), //<Icon name="image-search" size={24} color="red" />//<MaterialIcons name={''} size={24} color={"black"} />//<MaterialCommunityIcons name="finance" size={24} color="black" />
                }}
            />
            <TabStack.Screen
                name={FifthNavScreen}
                component={TestScreen}
                options={{
                    tabBarItemStyle: { display: "none" },
                }}
            />
            <TabStack.Screen
                name={SixNavScreen}
                component={ResultsScreen}
                options={{
                    tabBarItemStyle: { display: "none" },
                }}
            />
        </TabStack.Navigator>
    );
}
