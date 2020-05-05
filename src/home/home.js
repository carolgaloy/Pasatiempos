import React from 'react';
import { StyleSheet, View } from 'react-native';
import PCard from './gameCard';

export default function Home() {

  return (
    <View>
      <PCard style={styles.card} srcImage={require('../../assets/images/sudoku.jpg')} name='Sudoku'/>
      <PCard style={styles.card} srcImage={require('../../assets/images/futoshiki.jpeg')} name='Futoshiki'/>
      <PCard style={styles.card} srcImage={require('../../assets/images/kakuro.jpg')} name='Kakuro'/>
      <PCard style={styles.card} srcImage={require('../../assets/images/ox.jpeg')} name='O & X'/>
      <PCard style={styles.card} srcImage={require('../../assets/images/crucigrama.jpg')} name='Crucigrama'/>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {borderRadius: 4}
});