import { useState, useEffect } from 'react';
import { Text, View, Image, Pressable, TouchableHighlight } from 'react-native';
import { GeneralStyles, LoginStyles } from '../../assets/styles/styles'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton1, { CustomLink } from '../components/CustomButtons'
import CustomLogo from '../components/CustomLogo'
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function LoginScreen({ navigation }: any) {
    const validator = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        initialTouched: {
            email: false,
            password: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Correo electrónico inválido. Verifique')
                .required('Ingrese su correo electrónico.'),
            password: Yup.string()
                .required('Ingrese su contraseña.'),
        }),
        onSubmit: (values) => {
            console.log(values);
            navigation.navigate("UserRegister")
        },
    });
    console.log(typeof (navigation));
    return (
        <View style={LoginStyles.LoginContainer} >
            <View style={LoginStyles.LoginSubContainer}>
                <CustomLogo color='black' />
                <CustomTextInput
                    value={validator.values.email}
                    onChangeValue={(text) => validator.setFieldValue("email", text.replace(' ', ''))}
                    textPlaceholder={"Correo electrónico"}
                    error={validator.errors.email}
                    onBlur={() => validator.setFieldTouched('email')}
                    stateOnBlur={validator.touched.email}
                />
                <CustomTextInput
                    value={validator.values.password}
                    onChangeValue={(text) => validator.setFieldValue("password", text)}
                    textPlaceholder={"Contraseña"}
                    error={validator.errors.password}
                    secureTextEntry={true}
                    onBlur={() => validator.setFieldTouched('password')}
                    stateOnBlur={validator.touched.password}
                />
                <CustomButton1
                    text='Iniciar sesión'
                    // disable={validator.isValid}
                    onPress={validator.handleSubmit}
                />
                <CustomLink
                    text=' ¿No tienes cuenta? Registrate'
                    onPress={() => navigation.navigate("UserRegister")}
                />
                <CustomLink
                    text=' ¿Olvidaste tu contraseña? '
                />
            </View>
            <View style={GeneralStyles.subContainer}>
                <Text style={GeneralStyles.textDescription}>
                    Todos los derechos reservados y pertenecientes a la Universidad Tecnica Particular de Loja.
                </Text>
            </View>
        </View >
    );
}
