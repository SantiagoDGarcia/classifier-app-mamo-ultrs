import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Custom components
import { NavIcon } from "../components/CustomNavIcon";
import { NavHeader } from "../components/CustomNavHeader";
// Screens
import UserScreen from "../screens/User"
import HistScreen from "../screens/Hist"
import AnalysisScreen from "../screens/Analysis"
import HelpScreen from "../screens/Help"

const MainName = "Principal"

const TabStack = createBottomTabNavigator()

export default function Navigation() {
    return (
        <TabStack.Navigator
            initialRouteName='Analisis'
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
                name="Mi perfil"
                component={UserScreen}
                options={{
                    tabBarLabel: "Mi perfil",
                    tabBarLabelStyle: { fontSize: 13, marginBottom: 10 },
                    tabBarIcon: ({ focused }) => NavIcon('account-circle', 23, focused),
                }}
            />
            <TabStack.Screen
                name="Historial"
                component={HistScreen}
                options={{
                    tabBarLabel: "Historial",
                    tabBarLabelStyle: { fontSize: 13, marginBottom: 10 },
                    tabBarIcon: ({ focused }) => NavIcon('progress-clock', 23, focused),
                }}
            />
            <TabStack.Screen
                name="Analisis"
                component={AnalysisScreen}
                options={{
                    tabBarLabel: "Análisis",
                    tabBarLabelStyle: { fontSize: 13, marginBottom: 10 },
                    tabBarIcon: ({ focused }) => NavIcon('select-search', 23, focused),
                }}
            />
            <TabStack.Screen
                name="Ayuda"
                component={HelpScreen}
                options={{
                    tabBarLabel: "Ayuda",
                    tabBarLabelStyle: { fontSize: 13, marginBottom: 10 },
                    headerShown: false,
                    tabBarIcon: ({ focused }) => NavIcon('help-circle', 23, focused), //<Icon name="image-search" size={24} color="red" />//<MaterialIcons name={''} size={24} color={"black"} />//<MaterialCommunityIcons name="finance" size={24} color="black" />
                }}
            />
        </TabStack.Navigator>
    );
}
