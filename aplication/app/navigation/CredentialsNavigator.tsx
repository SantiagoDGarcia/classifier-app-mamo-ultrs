import { createStackNavigator } from "@react-navigation/stack";
// Custom components
import { NavIcon } from "../components/CustomNavIcon";
import { NavHeader } from "../components/CustomNavHeader";
import CustomLogo from '../components/CustomLogo'
import { Text, View, Image, Pressable, TouchableHighlight } from 'react-native';

// Screens
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const MainNavScreen = "UserLogin"
const SecondNavScreen = "UserRegister"
const ThirdNavScreen = "Mi perfil"

const TabStack = createStackNavigator()

export default function CredentialsNavigation() {
    return (
        <TabStack.Navigator
        >
            <TabStack.Screen
                name={MainNavScreen}
                component={LoginScreen}
                options={{
                    headerShown: false,
                    headerBackTitleVisible: false,
                }}
            />
            <TabStack.Screen
                name={SecondNavScreen}
                component={RegisterScreen}
                options={{
                    headerTitle: () => (
                        <View style={{ alignSelf: 'center', }}>
                            <CustomLogo color='black' />
                        </View>
                    ),
                    headerTitleStyle: { alignSelf: 'center', width: '90%', backgroundColor: 'green' },
                    headerBackTitleVisible: false,
                }}
            />
        </TabStack.Navigator>
    );
}
