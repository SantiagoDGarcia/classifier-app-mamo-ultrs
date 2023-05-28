import { Pressable, Text } from "react-native";
import { LoginStyles } from '../../assets/styles/styles'
import colors from '../../assets/theme/colors'

type defaultProps = {
    text: string;
    onPress?: () => void;
    disable?: boolean;
};
export default function CustomButton1({
    text,
    onPress,
    disable
}: defaultProps) {
    return (
        <Pressable
            style={({ pressed }) => [{ backgroundColor: pressed ? colors.secondary : colors.primary, }, LoginStyles.LoginButton]}
            disabled={disable}
            onPress={onPress}
        >
            <Text style={{ color: 'white', textAlign: "center" }}> {text}</Text>
        </Pressable>
    );
}

export function CustomLink({
    text,
    onPress
}: defaultProps) {
    return (
        <Pressable
            style={LoginStyles.LoginRegister}
            onPress={onPress}
        >
            {({ pressed }) => (
                <Text style={[{ textDecorationLine: pressed ? 'underline' : 'none', }]}>{text}</Text>
            )}
        </Pressable>
    );
}
