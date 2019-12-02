import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, Keyboard, LinearGradient } from 'react-native';

/**
 * Importando o componente Button
 */
import Button from './src/components/Button'

/**
 * Criando a tela principal da aplicação no formato de arrow function
 */
const App = () => {

  /**
   * Dados a serem lidos do usuário
   */
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('')

  /**
   * Dados a serem exibidos
   */
  const [imc, setImc ] = useState(0)
  const [classe, setClasse] = useState('')
  const [grau, setGrau] = useState(0)
  const [warning, setWarning] = useState(0)

  /**
   * Função que verifica o IMC calculado e seta os atributos de acordo com o valor obtido
   * @param {valor de IMC calculado} value 
   */
  const verificarIMC = (value) => {
    if(value == 0) {
      setWarning(0)
      setClasse('')
      setImc(0)
      setGrau(0)
      return
    }

    if (value < 18.5){
      setWarning(2)
      setClasse("Magreza")
      setGrau(0)
      return 
    }

    if (value < 24.9){
      setWarning(1)
      setClasse("Normal")
      setGrau(0)
      return 
    }

    if (value < 29.9){
      setWarning(2)
      setClasse("Sobrepeso")
      setGrau(1)
      return 
    }

    if (value < 39.9){
      setWarning(2)
      setClasse("Obesidade")
      setGrau(2)
      return 
    }

    if (value > 40){
      setWarning(2)
      setClasse("Obesidade Grave")
      setGrau(3)
      return 
    }
  }

  const calculateIMC = () => {
    /**
     * Escondendo o teclado
     */
    Keyboard.dismiss()


    if (peso == '' || altura == '') {
      verificarIMC(0)
      return
    }

    /**
     * Calculando o imc
     */
    imcValue=parseFloat(peso)/(parseFloat(altura) * parseFloat(altura))

    /**
     * Setando o valor na constante imc
     */
    setImc(imcValue)

    /**
     * Executando a verificação do IMC calculado
     */
    verificarIMC(imcValue)
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
          IMC: {imc.toFixed(2)}{"\n"}
          Classificação: {classe}{"\n"}
          Grau de obesidade: {grau}
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
    backgroundColor: '#212121'
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
    marginTop: 35,
    backgroundColor: '#FFF',
    width: "100%",
    color:"black",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold'
  },

  imcSaudavel: {
    marginTop: 35,
    backgroundColor: '#1A936F',
    width: "100%",
    color:"#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold'
  },

  imcRuim: {
    marginTop: 35,
    backgroundColor: '#E71D36',
    width: "100%",
    color:"#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default App;
