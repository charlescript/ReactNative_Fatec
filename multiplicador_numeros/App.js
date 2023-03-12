import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: '' 
    };

    this.calcular = this.calcular.bind(this);
  }


  calcular() {
    if ((this.state.numero1 === '') || (this.state.numero2 === '')){
      alert('É obrigatório digitar o dois números');
      return;
    }

    res = this.state.numero1 * this.state.numero2
    this.setState({resultado: 'Resultado: '+ res});
  }

  render() {
    return(
      <View style={styles.area}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        <TextInput 
          style={styles.input}
          placeholder="Digite o primeiro número"
          onChangeText={ (numero) => this.setState({numero1: numero}) }
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o segundo número"
          onChangeText={ (numero) => this.setState({numero2: numero})}
        />

        <Button title="Calcular" onPress={this.calcular} />

        <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 20
  }
})

export default App;