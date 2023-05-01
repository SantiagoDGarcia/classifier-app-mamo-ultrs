import React from 'react';
import { Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { GeneralStyles } from '../../assets/styles/styles'


export default function UserScreen() {
    return (
        <View style={GeneralStyles.container} >
            <View >
                <Text>User</Text>
            </View>
        </View >
    );
}

