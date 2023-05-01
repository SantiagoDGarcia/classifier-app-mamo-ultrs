import React from 'react';
import { Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { GeneralStyles } from '../../assets/styles/styles'


export default function HelpScreen() {
    return (
        <View style={GeneralStyles.container} >
            <View >
                <Text>Help</Text>
            </View>
        </View >
    );
}

