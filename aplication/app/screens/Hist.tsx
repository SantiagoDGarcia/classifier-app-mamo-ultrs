import React from 'react';
import { Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { GeneralStyles, HistStyles } from '../../assets/styles/styles'
import { CustomDividerText, CustomDivider } from '../components/CustomDivider'
import colors from '../../assets/theme/colors';

const HelpContent = [
    {
        typeAnalysis: 'U',
        dateAnalysis: '01/05/2023',
        img: require("../../assets/img/ultrasound-example.png"),
        imgMask: require("../../assets/img/mask-ultrasound-example.png"),
        result: 'B',
        presicion: 90.2,
        accuracy: 85.5,
        recall: 70.3,
        f1: 74.9,
    },
    {
        typeAnalysis: 'M',
        dateAnalysis: '03/05/2023',
        img: require("../../assets/img/mammography-example.png"),
        imgMask: require("../../assets/img/mask-mammography-example.png"),
        result: 'M',
        presicion: 98.2,
        accuracy: 89.5,
        recall: 75.3,
        f1: 79.9,
    },
    {
        typeAnalysis: 'U',
        dateAnalysis: '02/05/2023',
        img: require("../../assets/img/ultrasound-example.png"),
        imgMask: require("../../assets/img/mask-ultrasound-example.png"),
        result: 'B',
        presicion: 91.2,
        accuracy: 96.5,
        recall: 90.3,
        f1: 89.9,
    },
    {
        typeAnalysis: 'M',
        dateAnalysis: '05/05/2023',
        img: require("../../assets/img/mammography-example.png"),
        imgMask: require("../../assets/img/mask-ultrasound-example.png"),
        result: 'M',
        presicion: 94.2,
        accuracy: 79.5,
        recall: 78.3,
        f1: 75.9,
    },
];

export default function HistScreen() {
    return (
        <View style={GeneralStyles.container} >
            <View style={[GeneralStyles.subContainer, { alignItems: 'center' }]} >
                <View style={{ margin: 25 }}>
                    <Text style={GeneralStyles.labelTitle}>Historial de analisis previos</Text>

                </View>
                <View style={{ width: '100%' }}>
                    <FlatList
                        data={HelpContent}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 20 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ flexDirection: 'row', width: '50%', }}>
                                        <Image source={item.img} style={[HistStyles.images, { marginRight: '13%' }]} />
                                        <Image source={item.imgMask} style={HistStyles.images} />
                                    </View>
                                    <View style={{ width: '50%', justifyContent: 'space-around', flex: 1 }}>
                                        <View style={[HistStyles.container, { marginBottom: 5 }]} >
                                            <Text style={GeneralStyles.labelSubtitle}>Resultados</Text>
                                            {item.result == 'B' ?
                                                <Text style={GeneralStyles.infoTextBenign}>BENIGNO</Text> :
                                                <Text style={GeneralStyles.infoTextMalignant}>MALIGNO</Text>
                                            }
                                        </View>
                                        <View style={HistStyles.container} >
                                            <View style={[HistStyles.container, { width: '50%' }]} >
                                                <Text style={HistStyles.labelStats}>Precision:</Text>
                                                <Text style={HistStyles.infoStats}>{item.presicion?.toFixed()}%</Text>
                                            </View>
                                            <View style={[HistStyles.container, { width: '40%' }]} >
                                                <Text style={HistStyles.labelStats}>Recall:</Text>
                                                <Text style={HistStyles.infoStats}>{item.recall?.toFixed()}%</Text>
                                            </View>
                                        </View>
                                        <View style={HistStyles.container} >
                                            <View style={[HistStyles.container, { width: '50%' }]} >
                                                <Text style={HistStyles.labelStats}>Accuracy:</Text>
                                                <Text style={HistStyles.infoStats}>{item.accuracy?.toFixed()}%</Text>
                                            </View>
                                            <View style={[HistStyles.container, { width: '40%' }]} >
                                                <Text style={HistStyles.labelStats}>F1:</Text>
                                                <Text style={HistStyles.infoStats}>{item.f1?.toFixed()}%</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                <View style={[HistStyles.container, { marginTop: 8 }]} >
                                    <CustomDividerText
                                        positionLeft={true}
                                        text={item.typeAnalysis == 'U' ? 'Ultrasonido' : 'Mamografía'} />
                                    <Text >{item.dateAnalysis}</Text>
                                </View>
                                <CustomDivider />
                            </View>
                        )}
                    />
                </View>
            </View>
        </View >
    );
}

