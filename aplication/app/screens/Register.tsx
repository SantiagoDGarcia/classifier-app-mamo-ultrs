import { useState, useEffect } from 'react';
import { Text, View, Image, Pressable, TouchableHighlight } from 'react-native';
import { GeneralStyles, LoginStyles } from '../../assets/styles/styles'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton1, { CustomLink } from '../components/CustomButtons'
import CustomLogo from '../components/CustomLogo'
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function RegisterScreen({ navigation }: any) {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            organization: '',
        },
        initialTouched: {
            name: false,
            email: false,
            password: false,
            organization: false,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Ingrese su nombre.'),
            email: Yup.string()
                .email('Correo electrónico inválido. Verifique')
                .required('Ingrese su correo electrónico.'),
            password: Yup.string()
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'La contraseña debe contener al menos 8 caracteres, una letra mayuscula, una letra minuscula y un caracter especial.')
                .min(8)
                .required('Ingrese la contraseña.'),
            organization: Yup.string()
                .required('Ingrese la organización a la que pertenece.'),
        }),
        onSubmit: (values) => {
            console.log(values);
            navigation.navigate("UserRegister")
        },
    });
    return (
        <View style={LoginStyles.LoginContainer} >
            <View style={LoginStyles.LoginSubContainer}>
                <CustomTextInput
                    value={formik.values.name}
                    onChangeValue={(text) => formik.setFieldValue("name", text)}
                    textPlaceholder={"Nombre"}
                    error={formik.errors.name}
                    onBlur={() => formik.setFieldTouched('name')}
                    stateOnBlur={formik.touched.name}
                />
                <CustomTextInput
                    value={formik.values.email}
                    onChangeValue={(text) => formik.setFieldValue("email", text.replace(' ', ''))}
                    textPlaceholder={"Correo electrónico"}
                    error={formik.errors.email}
                    onBlur={() => formik.setFieldTouched('email')}
                    stateOnBlur={formik.touched.email}
                />
                <CustomTextInput
                    value={formik.values.password}
                    onChangeValue={(text) => formik.setFieldValue("password", text)}
                    textPlaceholder={"Contraseña"}
                    error={formik.errors.password}
                    secureTextEntry={true}
                    onBlur={() => formik.setFieldTouched('password')}
                    stateOnBlur={formik.touched.password}
                />
                <CustomTextInput
                    value={formik.values.organization}
                    onChangeValue={(text) => formik.setFieldValue("organization", text)}
                    textPlaceholder={"Organización"}
                    error={formik.errors.organization}
                    onBlur={() => formik.setFieldTouched('organization')}
                    stateOnBlur={formik.touched.organization}
                />
                <CustomButton1
                    text='Registrarse'
                    onPress={formik.handleSubmit}
                />
            </View>

        </View >
    );
}
