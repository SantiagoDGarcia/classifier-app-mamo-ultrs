import React from 'react';
import { Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { GeneralStyles } from '../../assets/styles/styles'
import { CustomDividerText, CustomDivider } from '../components/CustomDivider'

const HelpContent = [
    {
        title: '¿Que tipo de imagenes admite la aplicacion?',
        description: 'La aplicacion admite diversos tipos de imagenes, entre ellos se sencuentran JPG, PNG, JPEG',
    },
    {
        title: '¿Como mejorar el resultado del analisis?',
        description: 'La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG',
    },
    {
        title: '¿Como mejorar el resultado del analisis?',
        description: 'La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG La aplicacion admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG admite diversos tipos de imagenes, entre ellos se encuentran JPG, PNG, JPEG',
    },
];

export default function HelpScreen() {
    return (
        <View style={[GeneralStyles.container, { marginTop: 24 }]} >
            <View style={[GeneralStyles.subContainer, { alignItems: 'center' }]} >
                <View style={{ margin: 25 }}>
                    <Text style={GeneralStyles.labelTitle}>Ayuda</Text>

                </View>
                <View style={{ width: '100%' }}>
                    <FlatList
                        data={HelpContent}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 20 }}>
                                <CustomDividerText
                                    positionLeft={true}
                                    text={item.title} />
                                <Text style={{ marginBottom: 15 }}>{item.description}</Text>
                                <CustomDivider />
                            </View>

                        )}
                    // keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View >
    );
}

