import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
/* import Home from './src/home/home'; */
import Signin from './src/auth/signin';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

const getFonts = () => Font.loadAsync({
  'phosphate-inline': require('./assets/fonts/Phosphate-Inline-01.ttf'),
  'phosphate-solid': require('./assets/fonts/Phosphate-Solid-02.ttf')
})

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Signin} 
            options={{
              title: 'Pasatiempos', 
              headerStyle: {backgroundColor: '#F5F5F5'},
              headerTintColor: '#7C4DFF',
              headerTitleStyle: {fontFamily: 'phosphate-solid', fontSize: 24, alignSelf: 'flex-start'},
              headerRight: () => (
                <MaterialIcons name='account-circle' size={24} style={{paddingRight: 12}}/>
              )
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'phosphate-solid'
  }
});
