import { MaterialCommunityIcons, } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import colors from '../../assets/theme/colors'
//import Icon from 'react-native-ionicons'


export function NavIcon(name: any, size: number, focused: boolean) {
    const color = focused ? colors.secondary : "none";
    return (
        <View style={{ backgroundColor: color, width: '65%', alignItems: "center", borderRadius: 15, padding: 3 }}>
            <MaterialCommunityIcons name={name} size={size} color='#343030' />
        </View>
    );
}