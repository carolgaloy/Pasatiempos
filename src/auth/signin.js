import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Message from '../global/message';
import { OutlinedTextField } from 'react-native-material-textfield';
import { TouchableOpacity } from 'react-native-gesture-handler';
/* import { GoogleSigninButton } from '@react-native-community/google-signin'; */

export default function Signin() {

    return (
        <View>
            <Message message='Hola de nuevo'/>
            <Text style={styles.message}>Por favor, inicia sesión para continuar</Text>
            <View style={styles.input}>
                <OutlinedTextField
                    label='Correo electrónico'
                    containerStyle={{
                        height: 56,
                        marginBottom: 24
                    }}
                    autoCapitalize='none'
                    textContentType='emailAddress'
                    autoCompleteType='email'
                />
                <OutlinedTextField
                    label='Contraseña'
                    containerStyle={{
                        height: 56,
                        marginBottom: 24
                    }}
                    autoCapitalize='none'
                    textContentType='password'
                    autoCompleteType='password'
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Acceder</Text>
                </TouchableOpacity>

{/*                 <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    disabled={this.state.isSigninInProgress} />
            </View> */}
        </View>
    );
}


const styles = StyleSheet.create({
    message: {
        fontFamily: 'phosphate-solid',
		fontSize: 14,
		color: '#616161',
        marginLeft: 16,
        marginTop: 24,
        marginBottom: 16,
        letterSpacing: 0.31
    },
    input: {
        marginHorizontal: 16
    },
    button: {
        height: 56,
        backgroundColor: '#2979FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    textButton: {
        fontSize: 24,
        fontFamily: 'phosphate-solid',
        color: '#FAFAFA'
    }
});