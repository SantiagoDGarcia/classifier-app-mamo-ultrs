import { TextInput, } from "react-native";
import { LoginStyles } from '../../assets/styles/styles';
import colors from '../../assets/theme/colors';
import { Text, View, Image, Pressable, TouchableHighlight } from 'react-native';

type defaultProps = {
    value: string;
    onChangeValue: ((text: string) => void);
    textPlaceholder: string;
    secureTextEntry?: boolean;
    onBlur?: any;
    stateOnBlur?: boolean;
    error?: string;
};

export default function CustomTextInput({
    value,
    onChangeValue,
    textPlaceholder,
    secureTextEntry,
    onBlur,
    stateOnBlur,
    error
}: defaultProps) {
    return (
        <>
            <TextInput
                value={value}
                style={LoginStyles.LoginTextInput}
                autoCapitalize='none'
                onChangeText={onChangeValue}
                placeholderTextColor={colors.primary}
                placeholder={textPlaceholder}
                secureTextEntry={secureTextEntry}
                onBlur={onBlur}
            />
            {error && stateOnBlur && (
                <Text style={{
                    color: "#E40E00", width: '90%', alignSelf: 'center', marginTop: -8, fontWeight: '500',
                }}>{error} </Text>
            )}
        </>
    );
}
