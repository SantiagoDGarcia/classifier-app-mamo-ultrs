import React from 'react';
import { Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity, ScrollView } from 'react-native';
import { GeneralStyles } from '../../../assets/styles/styles'
import CustomCard from '../../components/CustomCard'
import { MaterialCommunityIcons, } from '@expo/vector-icons';
import { CustomDivider, } from '../../components/CustomDivider';
import { CustomDividerText } from '../../components/CustomDivider';

export default function ResultsScreen() {
    return (
        <View style={[GeneralStyles.container]} >
            <ScrollView>
                <View style={[GeneralStyles.subContainer, { alignItems: 'center' }]} >
                    <View style={{ margin: 25 }}>
                        <Text style={GeneralStyles.labelTitle}>Análisis de ultrasonido</Text>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row', marginBottom: 30, }}>
                        <View style={{ width: '50%', justifyContent: 'center', alignContent: 'center', }}>
                            <View style={[GeneralStyles.borderContainer, { width: 160, height: 160, backgroundColor: '#F2EFEF', }]} />
                        </View>
                        <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={GeneralStyles.labelSubtitle}>Región de interes (RoI)</Text>
                        </View>
                    </View>
                    <CustomDivider />
                    <View style={{ width: '100%', marginVertical: 10 }}>
                        <Text style={GeneralStyles.textDescription}>Con las evaluaciones de nuestro algoritmo, deducimos con un 92% de precisión que el resultado de tu imágen es:</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={[GeneralStyles.infoTextBenign, { fontSize: 21 }]}>BENIGNO</Text>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

