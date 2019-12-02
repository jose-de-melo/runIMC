
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import Button from './src/components/Button'

const App = () => {
  const [altura, setAltura] = useState('');
  const [message, setMessage] = useState('')
  const [warning, setWarning] = useState(0)
  const [peso, setPeso] = useState('')

  const verificarIMC = (imc) => {
    if (imc < 18.5){
      setMessage("IMC: %imc\nClassificação: Magreza\nGrau de obesidade: 0")
      return 
    }
  }


  const calculateIMC = () => { 
    imc = peso / (altura * altura)
    verificarIMC(imc)
    //setMessage(imc)
  }

  return (
    <>
      <StatusBar translucent backgroundColor={styles.container.backgroundColor}/>
      <View style={styles.container}>
        
        <Text style={styles.title}>RunIMC</Text>

        <TextInput
          type="text"
          placeholder="Altura"
          keyboardType="numeric"
          style={styles.inputs}
          value={altura}
          onChangeText={setAltura}
          
        />

        <TextInput
          type="text"
          placeholder="Peso"
          style={styles.inputs}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />


        <Button text='Calcular' function={calculateIMC}/>

        <Text 
          style={(warning == 0) ? styles.imcNormal : ((warning == 1) ? styles.imcSaudavel : styles.imcRuim)}
        >
          IMC: {"\n"}
          Classificação: {"\n"}
          Grau de obesidade: {"\n"}
        </Text>


      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303F9F'
  },

  imcNormal:{
    backgroundColor: 'green'
  },

  inputs: {
    backgroundColor: '#fafafa',
    marginTop: 25,
    width: '100%',
    height: 60,
    textAlign: 'center',
    fontSize: 20
  },

  title: {
    fontSize: 40,
    color: '#FFF',
    marginBottom: 30,
    fontWeight: 'bold'
  },

  imcNormal: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    marginTop: 35,
    backgroundColor: '#FFF',
    width: "100%",
    color:"black"
  },

  imcSaudavel: {
    
  },

  imcRuim: {
    
  }



});

export default App;
