import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Message(props) {

    return (
        <ImageBackground style={styles.header} source={require('../../assets/images/sudoku.jpg')}>
            <LinearGradient
                colors={['#2979FF','#45B9FF']}
                start={{x:0, y:1}}
                end={{x:1, y:1}}
                style={styles.gradient}>
                <Text style={styles.text}>{props.message}</Text>
            </LinearGradient>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    header: {
        height: 196
    },
    gradient: {
        height: '100%',
        width: '100%',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    text: {
        color: '#fff',
        fontSize: 42,
        fontFamily: 'phosphate-solid',
		letterSpacing: 1.31
    }
});