import { useState, useEffect } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { LoginStyles } from '../../assets/styles/styles'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton1, { CustomLink } from '../components/CustomButtons'


export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={LoginStyles.LoginContainer} >
            <View style={{ height: '90%', justifyContent: 'center' }}>
                <Image source={require("../../assets/img/instagram-logo.png")} style={LoginStyles.logoTiltle} />
                <CustomTextInput
                    value={email}
                    onChangeValue={onChangeEmail}
                    textPlaceholder={"Correo electrónico"}
                />
                <CustomTextInput
                    value={password}
                    onChangeValue={onChangePassword}
                    textPlaceholder={"Contraseña"}
                    secureTextEntry={true}
                />
                <CustomButton1
                    text='Iniciar sesión'
                />
                <CustomLink
                    text=' ¿No tienes cuenta? Registrate'
                />
            </View>
            <View style={{ width: '90%', alignSelf: 'center' }}>
                <Text style={{ textAlign: "justify" }}>Todos los derechos reservados y pertenecientes a la Universidad Tecnica Particular de Loja</Text>
            </View>
        </View >
    );
}
