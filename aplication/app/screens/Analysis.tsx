import React from 'react';
import { Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { GeneralStyles } from '../../assets/styles/styles'
import CustomCard from '../components/CustomCard'

export default function AnalysisScreen({ navigation }: any) {
    return (
        <View style={[GeneralStyles.container, { justifyContent: 'center' }]} >
            <View style={GeneralStyles.subContainer} >
                <CustomCard
                    title='Ultrasonido'
                    navigation={navigation}
                    imgSource={require('../../assets/img/ultrasound-example.png')} />
                <CustomCard
                    positionLeft={true}
                    navigation={navigation}
                    title='Mamografia'
                    imgSource={require('../../assets/img/mammography-example.png')} />
            </View>
        </View >
    );
}

