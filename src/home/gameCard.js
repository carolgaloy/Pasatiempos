import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PCard(props) {

  return (
		<View style={styles.card}>
			<ImageBackground source={props.srcImage} style={styles.image} imageStyle={{borderRadius: 4}}>
				<LinearGradient
					colors={['#2979FF','#45B9FF']}
					start={{x:0, y:1}}
					end={{x:1, y:1}}
					style={styles.gradient}>
					<Text style={styles.text}>{props.name.toUpperCase()}</Text>
				</LinearGradient>
			</ImageBackground>
		</View>
  );
}


const styles = StyleSheet.create({
	card: {
		marginTop: 24,
		marginHorizontal: 16,
		height: 86,
		borderRadius: 4
	},
	image: {
		width: '100%',
		height: '100%'
	},
	gradient: {
		height: '100%',
		width: '100%',
		opacity: 0.8,
		justifyContent: 'center',
		borderRadius: 4
	},
	text: {
		fontFamily: 'phosphate-solid',
		fontSize: 32,
		color: '#FAFAFA',
		letterSpacing: 1,
		marginLeft: 16
	}
});