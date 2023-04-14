import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { StyleSheet } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '?',
    };

    this.descobrir = this.descobrir.bind(this);
  }

  descobrir() {
    this.setState({
      resultado: Math.floor(Math.random() * 60),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Jogo no Nº Aleatório</Text>

        <Image
          source={{
            uri: 'https://t.ctcdn.com.br/23kEbKxUrMVQAJGv8TnFsyyMndw=/0x6:2397x1356/512x288/smart/filters:format(webp)/i371042.jpeg',
          }}
          style={{
            width: 250,
            height: 250,
            alignSelf: 'center',
            marginTop: 20,
          }}
        />

        <Text style={styles.texto}> {this.state.resultado} </Text>
        <Button title="Descobrir" onPress={this.descobrir} />
      </View>
    );
  }
} // Fim Component

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 15,
    fontSize: 14,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    marginTop: 5,
  },
  titulo: {
    fontSize: 18,
    color: 'orange',
    alignSelf: 'center',
    marginTop: 15,
  },
  imagem: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export { styles };
export default App;
