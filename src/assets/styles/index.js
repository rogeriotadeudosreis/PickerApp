import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182522',
    // alignItems: 'center',
  },
  containerTitulo: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  titulo: {
    marginTop: 15,
    color: '#FFF',
    fontSize: 28,
  },
  selecaoFilme: {
    marginTop: 30,
    color: '#FFF',
    fontSize: 20,
  },
  picker: {
    marginHorizontal: 10,
    color: '#FFF',
    backgroundColor: '#000',
  },
  filmeEscolhido: {
    marginTop: 50,
    backgroundColor: '#CCC',
    marginHorizontal: 20,
    borderRadius: 7,
    alignItems: 'center',
  },
  nomeFilme: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue',
  },
  duracaoFilme: {
    fontSize: 18,
    color: 'blue',
  },
});

export default styles;
