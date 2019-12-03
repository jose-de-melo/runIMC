# RunIMC

Passo a passo de como criar a aplicação apresentada no minicurso introdutório ao React Native

### Criando a aplicação co Expo

```shell
$ expo init 
```

### Executando a aplicação inicial
```shell
$ cd runIMC
$ yarn start
```

### Editando a tela da aplicação

Edite o conteúdo da tela inicial da aplicação, mantendo a seguinte estrutura apenas.

```javascript
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
    return (
         <View style={styles.container}>
            <Text>RunIMC</Text>
         </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App
```
### Criando um componente

Em seguida, vamos criar um componente Button. Para isso, crie o arquivo **src/componentes/Button/index.js** com o seguinte conteúdo.

```javascript
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Button = (props) => {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={props.function}>
                <Text style={styles.textButton}>{props.text}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button:{
        borderWidth:2,
        borderColor: '#FFF',
        width: 146,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 40,
    },

    textButton:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default Button;
```

O que fizemos foi criar um botão utilizando o componente **TouchableOpacity** do React Native, onde o botão irá possuir as propriedades **function** e **text** que são obtidas através do ***props***, que são os atributos que o componente tem ou terá.

### Importando o Button

Para importar o componente para a tela da aplicação, adicione a seguinte linha no arquivo **App.js**:

```javascript
import Button from '.src/components/Button'
```

Para testar o componente criado, vamos criar uma função simples no arquivo **App.js** para exibir algum texto quando o botão for clicado.

```javascript
function calcularIMC(){
    alert("Calculando IMC...")
}
```

Em seguida, crie um botão utilizando o componente criado anteriormente. Para isso, adicione a linha no arquivo **App.js**:

```javascript
    const App = () => {
    return (
         <View style={styles.container}>
            <Text>RunIMC</Text>
+           <Button text="Salvar" function={calcularIMC} />    
         </View>

    )
}
```
***text*** e ***function*** são os atributos que serão utilizados na criação do botão, através da variável ***props***. 

Com isso, já podemos ver o botão na tela que ao ser clicado,a função ***calcularIMC()*** será executada e o ***alert*** será exibido.









