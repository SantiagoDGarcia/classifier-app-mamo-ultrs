import React from 'react';
import { Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { GeneralStyles } from '../../assets/styles/styles'
import { CustomDividerText, CustomDivider } from '../components/CustomDivider'
import CustomTextVerticalVis from '../components/CustomTextVerticalVis'
import { CustomLink } from '../components/CustomButtons'

export default function UserScreen() {
    return (
        <View style={GeneralStyles.container} >
            <View style={[GeneralStyles.subContainer, { alignItems: 'center' }]} >
                <View style={{ margin: 25 }}>
                    <Text style={GeneralStyles.labelTitle}>Mi perfil</Text>
                </View>
                <View style={{ width: '100%' }}>
                    <View style={{ marginBottom: 20 }}>
                        <CustomTextVerticalVis
                            label='Correo electrónico'
                            description='santiagodavid-2000@hotmail.com'
                        />
                        <CustomTextVerticalVis
                            label='Organización'
                            description='Universidad Técnica Particular de Loja'
                        />
                        <CustomTextVerticalVis
                            label='Fecha de inicio'
                            description='15/05/2023'
                        />
                    </View>
                    <CustomLink
                        text=' Cambiar contraseña. '
                    />
                    <CustomDivider />
                </View>
            </View>
        </View>
    );
}

