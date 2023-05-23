import { Text, View, Image } from 'react-native';
import { GeneralStyles } from '../../assets/styles/styles'
type defaultProps = {
    color?: string;
};

export default function CustomLogo({
    color,
}: defaultProps) {
    return (
        <View style={GeneralStyles.logotipe}>
            <Text style={[GeneralStyles.logotipeText, { color: color ? color : 'white', }]} >
                Biomarcadores UTPL
            </Text>
            <Image source={require('../../assets/img/facebook-logo.png')} style={GeneralStyles.logotipeImg} />
        </View>
    );
}