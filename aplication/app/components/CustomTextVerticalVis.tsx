import { Text, View, Image } from 'react-native';
import { GeneralStyles } from '../../assets/styles/styles'
type defaultProps = {
    label?: string;
    description?: string;
};

export default function CustomTextVerticalVis({
    label,
    description
}: defaultProps) {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ width: '40%', }}>
                <Text style={GeneralStyles.labelSubtitle}>{label}</Text>
            </View>
            <View style={{ width: '50%', flex: 1 }}>
                <Text>{description}</Text>
            </View>
        </View>
    );
}