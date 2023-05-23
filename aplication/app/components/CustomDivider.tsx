import colors from '../../assets/theme/colors'
import { Divider, } from '@rneui/themed';
import { Pressable, Text } from "react-native";

type defaultProps = {
    positionLeft?: boolean;
    text: string
};

export const CustomDivider = () => {
    return (
        <Divider width={1} color={colors.primary} style={{ width: '100%', alignSelf: 'center' }} />
    );
}

export function CustomDividerText({
    positionLeft,
    text
}: defaultProps) {
    return (
        <Text style={[{ alignSelf: positionLeft ? 'flex-start' : 'flex-end', color: colors.primary, paddingBottom: 5 }]}>{text}</Text>
    );
}