import React, {Component } from 'react';
import { View,Text, StyleSheet,TextInput, Image, Button} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       price_alcool: '',
       price_gasolina: '',
      resultado: ''
    };

    this.calcular = this.calcular.bind(this);
  }

calcular() {
  if((this.state.price_alcool === '') || (this.state.price_gasolina === '')){
      alert('É obrigatório digitar os 2 preço!');
      return;
  }
  
  res = this.state.price_alcool / this.state.price_gasolina

  if(res < 0.7){
    this.setState({resultado: 'Utilize o Alcool é mais vantajoso!'});


  } else {
    this.setState({resultado: 'Utilize gasolina é mais vantajoso!'});
  }
}


  render() {
    return(
      <View style={styles.area}>
        <Text style={styles.titulo}> Alcool ou Gasolina</Text>

        <Image style={styles.img}
          source={{ uri: 'https://clickpetroleoegas.com.br/wp-content/uploads/2022/04/blog-hiper-garagem-830x450.jpg'}}
          style={{width: 300, height: 290}}
        />

        <TextInput 
          style={styles.input}
          placeholder = 'Preço do litro de Alcool'
          onChangeText = {(numero) => this.setState({price_alcool:numero})}
        />

         <TextInput
          style={styles.input}
          placeholder = 'Preço do litro de Gasolina'
          onChangeText = {(numero) => this.setState({price_gasolina:numero})}
        />

        <Button title="Calcular" onPress={this.calcular}/>

        <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
} // Fim de COMPONENT

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
    color: 'gold'
  },
  titulo:{
    fontSize: 28,
    alignSelf: 'center',
    color: 'red',
    marginTop: 20
  },
  img:{ 
    marginLeft: '10px'
  }
})

export default App;
