import React from 'react';
import { Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { GeneralStyles } from '../../assets/styles/styles'
import CustomCard from '../components/CustomCard'

export default function AnalysisScreen() {
    return (
        <View style={[GeneralStyles.container, { justifyContent: 'center' }]} >
            <View style={GeneralStyles.subContainer} >
                <CustomCard
                    title='Ultrasonido'
                    imgSource={require('../../assets/img/ultrasound-example.png')} />
                <CustomCard
                    positionLeft={true}
                    title='Mamografia'
                    imgSource={require('../../assets/img/mammography-example.png')} />
            </View>
        </View >
    );
}

