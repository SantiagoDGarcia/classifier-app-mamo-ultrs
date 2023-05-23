import { StyleSheet } from 'react-native';
import colors from '../theme/colors'
import fonts from '../fonts/font'
import { StatusBar, } from 'react-native';
// General
export const GeneralStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        padding: 1,
        paddingTop: 0
    },
    subContainer: {
        width: '90%',
        alignSelf: 'center',
    },
    logotipe: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: 'center',
    },
    logotipeText: {
        padding: 5,
        fontSize: fonts.normalSize + 1,
    },
    logotipeImg: {
        width: 15,
        height: 15,
    },
    labelTitle: {
        fontSize: fonts.normalSize + 1,
        color: colors.primary,
    },
    labelSubtitle: {
        fontSize: fonts.normalSize - 1,
        color: colors.primary,
    },
    infoTextBenign: {
        borderRadius: 50,
        backgroundColor: '#539E2F',
        color: 'white',
        paddingHorizontal: 15
    },
    infoTextMalignant: {
        borderRadius: 50,
        backgroundColor: '#CF4747',
        color: 'white',
        paddingHorizontal: 15,
    }
});

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

// Navbar
export const NavStyles = StyleSheet.create({
    navBar: {
        backgroundColor: colors.primary,
        height: 60,
        marginTop: StatusBar.currentHeight,
        justifyContent: 'center'
    },
});

// Hist
export const HistStyles = StyleSheet.create({
    navBar: {
        backgroundColor: colors.primary,
        height: 60,
        marginTop: 24,
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    images: {
        width: 66,
        height: 66,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 7,
    },
    labelStats: {
        fontSize: fonts.normalSize - 2,
    },
    infoStats: {
        fontSize: fonts.normalSize - 2,
        color: colors.primary,
    }
});
