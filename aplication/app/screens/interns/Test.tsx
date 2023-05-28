import React from 'react';
import { Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { GeneralStyles } from '../../../assets/styles/styles'
import CustomCard from '../../components/CustomCard'
import { MaterialCommunityIcons, } from '@expo/vector-icons';
import { CustomDivider, } from '../../components/CustomDivider';
import { CustomDividerText } from '../../components/CustomDivider';
import CustomButton1, { CustomLink } from '../../components/CustomButtons'

export default function TestScreen({ navigation }: any) {
    return (
        <View style={[GeneralStyles.container]} >
            <View style={[GeneralStyles.subContainer, { alignItems: 'center' }]} >
                <TouchableOpacity onPress={() => { }} style={{}}>
                    <View style={[GeneralStyles.borderContainer, { width: 230, height: 230, margin: 25, backgroundColor: '#F2EFEF', alignItems: 'center', justifyContent: 'center' }]}>
                        <MaterialCommunityIcons name='plus-circle' size={70} color='#D17357' />
                    </View>
                </TouchableOpacity>
                <CustomDividerText positionLeft={true} text='Cargar imagen' />
                <CustomDivider />
                <View style={{ width: '100%', marginTop: 15, justifyContent: 'space-between', }}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={GeneralStyles.textDescription}>Ten en cuenta las siguientes caracteristicas para lograr el mejor resultado de tus imagenes</Text>
                        <View style={{ marginLeft: 10, }}>
                            <Text style={GeneralStyles.textDescription}>- La resolucion de la imagen es primordial para que el analisis salga de mejor manera.</Text>
                            <Text style={GeneralStyles.textDescription}>- La aplicacion admite imagenes de tipo JPG, JPEG, PNG.</Text>
                            <Text style={GeneralStyles.textDescription}>- Se debe controlar ciertos tipos de puntos adicionales.</Text>
                        </View>
                        <View style={{ marginBottom: 55, marginTop: 15 }}>
                            <CustomDividerText positionLeft={false} text='Más información en Ayuda.' />
                        </View>
                    </View>
                    <CustomButton1
                        text='Iniciar evaluación'
                        onPress={() => navigation.navigate("Results")}
                    />
                </View>
            </View>
        </View >
    );
}

