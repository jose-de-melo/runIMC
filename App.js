import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './src/components/Button'

export default function App() {

  function calcularIMC(){
    alert("TESTANDO")
  }


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <Button text='Calcular' function={calcularIMC} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
