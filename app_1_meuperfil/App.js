import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
function _dadosPessoais(){
    let texto = " Dados pessoais:\n RG: 41.324.154-3 \n CPF: 123.456.789-00";
    alert(texto);
 }


function _formacao(){
    let texto = " Formação:\n -Ensino médio completo.\n -Técnico de informática ETEC.\n-ADS FATEC PG 70%";
    alert(texto);
 }

 function _experiencia(){
    let texto = " Empresa Jrtech \n-Técnico em manutenção de equipamentos de informática.\n Função: Prestava manutenção a relógios de ponto e catracas, bem como treinamento de softwares para relógios de ponto.\n\n\n  Empresa: Microchipnet\n - Operador telemarketing técnico receptivo: Função: atender clientes jurídicos e fisicos, prestando suporte para configuração de roteadores e configuração de redes LAN, administrava escala  de trabalho dos técnicos externos bem como prestava suporte a eles quando necessário.\n-Levantava indicadores de cada um tomando como base dados como inicio serviço, fim de serviço, duranção do serviço no cliente, descrição de serviço, tempo de translado entre clientes, gerando informações para serem apuradas pelos gestores.";
    
    alert(texto);
 }

 function _projetos(){
    let texto = "  Projetos:\n BLOG informativo Link: https://blogtreinocharles.netlify.app \n\n Site sobre carros: https://charlesharpycar.netlify.app/ ";
        alert(texto);
 }

  return (
    <View style={styles.container}>
     
      <Card>
         <Text style={styles.paragraph}>
          Charles Rocha dos Santos
        </Text>
        <AssetExample />
       
        <Text style={styles.paragraph}>
         <Button 
            onPress={_dadosPessoais}
            title="Dados Pessoais"
          />
        </Text>

         <Text style={styles.paragraph}>
          <Button 
            onPress={_formacao}
            title="      Formação     " 
          />
        </Text>

        <Text style={styles.paragraph}>
          <Button 
            onPress={_experiencia}
            title="     Experiência     "
          />
        </Text>

        


         <Text style={styles.paragraph}>
          <Button 
            onPress={_projetos}
            title="        Projetos        "
          />
        </Text>


        
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
