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
    <Button text="Salvar" function={calcularIMC} />  
```
***text*** e ***function*** são os atributos que serão utilizados na criação do botão, através da variável ***props***. 

Com isso, já podemos ver o botão na tela que ao ser clicado,a função ***calcularIMC()*** será executada e o ***alert*** será exibido.


### Criando os componentes da aplicação

Para ler as informações de peso e altura do usuário, vamos adicionar duas instâncias do componente ***TextInput*** ao arquivo **App.js**.

O arquivo deve ter o seguinte conteúdo depois dessa alteração:

```javascript
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
    return (
         <View style={styles.container}>
        
            <Text>RunIMC</Text>

            <TextInput
                type="text"
                placeholder="Altura"
                keyboardType="numeric"
            />

            <TextInput
                type="text"
                placeholder="Peso"
                keyboardType="numeric"
            />
            <Button text='Calcular' function={calculateIMC} />
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

Agora temos dois inputs para ler as informações do usuário. Como vamos obter apenas dados numéricos, definimos que o atributo **keyboardType** dos inputs será numérico, ou seja, quando o usuário clicar em um dos inputs, o teclado que será mostrado exibirá apenas números.

### Armazenando os dados inseridos nos inputs com useState

Para obter e armazenar os dados obtidos através dos inputs, vamos usar o ***hook*** **useState()**. 

Um ***hock*** é uma função especial que te permite utilizar recursos do React. Por exemplo, o **useState()** é um ***hook*** que te permite adicionar o ***state*** do React a componente de função. 

O ***state*** de um componente é similar as ***props***, mas é privado e totalmente controlado pelo componente.

Para utilizar o ***useState*** na nossa aplicação, vamos importá-lo no arquivo **App.js** da seguinte forma:

```javascript
import React, { useState } from 'react';
```

Agora, vamos criar as constantes que serão manipuladas através do **useState**:

```javascript
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
```

Acima, estão sendo criadas 5 constantes e suas respectivas funções de alteração. 

- altura e peso: valores que serão lidos nos inputs
- imc: valor que será calculado através da altura e peso informados
- classe e grau: indicam a classe e o grau de obesidade obtidos através do imc calculado para os dados lidos
warning: atributo utilizado para modificar a estilização do componente **Text** que irá exibir os dados sobre o imc calculado.

Dentro dos parênteses de cada **useState()** está o valor inicial dessas constantes.

Com os states criados, vamos referênciá-los nos inputs para que o valor inserido nos mesmos seja atribuido a sua respectiva constante. Com essa alteração, o conteúdo do arquivo **App.js** deve ficar assim:

```javascript
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

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

    return (
         <View style={styles.container}>
        
            <Text>RunIMC</Text>

            <TextInput
                type="text"
                placeholder="Altura"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />

            <TextInput
                type="text"
                placeholder="Peso"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <Button text='Calcular' function={calculateIMC} />
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














