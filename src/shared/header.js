import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

export default function PHeader(props) {

  return (
      <Header 
        placement = "left"
        backgroundColor = '#F5F5F5'
        centerComponent = {{ text: props.text, style: styles.headerText}}
        rightComponent = { <MaterialIcons name='account-circle' size={24}/> }
    />
  );
}


const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'phosphate-solid',
    fontSize: 24,
    color: '#7C4DFF'
  }
});