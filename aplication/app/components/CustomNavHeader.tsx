import { MaterialCommunityIcons, } from '@expo/vector-icons';
import { Text, View, Image, } from 'react-native';
import { NavStyles } from '../../assets/styles/styles'

import CustomLogo from './CustomLogo';

export const NavHeader = () => {
    return (
        <View style={NavStyles.navBar}>
            <CustomLogo />
        </View>
    );
}