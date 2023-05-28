import { Text, View, Image } from 'react-native';
import { GeneralStyles } from '../../assets/styles/styles';
import { SvgComponent } from '../../assets/styles/icons';
//import { Bower } from '../../assets/img/bower.svg'
type defaultProps = {
    color?: string;
};

export default function CustomLogo({
    color,
}: defaultProps) {
    return (
        <View style={GeneralStyles.logotipe}>
            <Text style={[GeneralStyles.logotipeText, { color: color ? color : 'white', }]} >
                MamaCheck
            </Text>
            {/* <SvgComponent /> */}
            <Image source={require('../../assets/LogoBase.png')} style={GeneralStyles.logotipeImg} />
        </View>
    );
}