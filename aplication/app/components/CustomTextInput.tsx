import { TextInput, } from "react-native";
import { LoginStyles } from '../../assets/styles/styles'
import colors from '../../assets/theme/colors'

type defaultProps = {
    value: string;
    onChangeValue: ((text: string) => void);
    textPlaceholder: string;
    secureTextEntry?: boolean;
};

export default function CustomTextInput({
    value,
    onChangeValue,
    textPlaceholder,
    secureTextEntry
}: defaultProps) {
    return (
        <TextInput
            value={value}
            style={LoginStyles.LoginTextInput}
            onChangeText={onChangeValue}
            placeholderTextColor={colors.primary}
            placeholder={textPlaceholder}
            secureTextEntry={secureTextEntry}
        />
    );
}
