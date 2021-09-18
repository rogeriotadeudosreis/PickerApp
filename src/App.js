import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import styles from './assets/styles';

//yarn add @react-native-picker/picker

export default function App() {
  const [filme, setfilme] = useState();
  const [filmes, setfilmes] = useState([
    {nome: 'Velozes & Furiosos 9', duracao: '2h 23min'},
    {nome: 'O Esquadrão Suicida', duracao: '2h 12min'},
    {nome: 'Viúva Negra', duracao: '2h 14min'},
    {nome: 'Homem-Aranha 3', duracao: '2h 19min'},
    {nome: 'Um Lugar Silencioso - Parte II', duracao: '1h 37min'},
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Aula sobre Picker</Text>
        <Text style={styles.selecaoFilme}>Selecione o Filme Desejado</Text>
      </View>

      <Picker
        dropdownIconColor="#FFF"
        selectedValue={filme}
        onValueChange={itemValue => {
          setfilme(itemValue);
        }}>
        {filmes.map((_filme, indice) => {
          return (
            <Picker.Item key={indice} value={indice} label={_filme.nome}
            
            color='#000'
             />
          );
        })}
      </Picker>

      {filme >= 0 && (
        <View>
          <Text>Filme: {filmes[filme].nome}</Text>
          <Text>Filme: {filmes[filme].duracao}</Text>
        </View>
      )}
    </View>
  );
}
