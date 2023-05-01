import { MaterialCommunityIcons, } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, } from 'react-native';
import colors from '../../assets/theme/colors'


export function NavHeader() {
    return (
        <View style={{ backgroundColor: colors.primary, height: 60, marginTop: 23 }}>
            <Text>Biomarcadores UTPL</Text>
        </View>
    );
}