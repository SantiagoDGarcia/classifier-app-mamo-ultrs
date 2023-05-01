import { StyleSheet } from 'react-native';
import colors from '../theme/colors'
import fonts from '../fonts/font'

// Login
export const LoginStyles = StyleSheet.create({
    LoginContainer: {
        width: "98%",
        height: "100%",
        justifyContent: "center"
    },
    LoginRegister: {
        color: colors.primary,
        fontSize: fonts.normalSize,
        alignItems: "center",
        margin: 7
    },
    logoTiltle: {
        width: 150,
        height: 80,
        alignSelf: "center"
    },
    LoginButton: {
        paddingVertical: 9,
        borderRadius: 70,
        width: "45%",
        alignSelf: "center",
        margin: 12
    },
    LoginTextInput: {
        paddingHorizontal: 7,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingVertical: 9,
        margin: 16
    },
});


export const GeneralStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        padding: 1,
        paddingTop: 0
    },
});
