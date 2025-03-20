
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';



const App = () => {
  const handleBotao1Press = () => {
    Alert.alert('Botão 1 Pressionado!');
  };

  const handleBotao2Press = () => {
    Alert.alert('Botão 2 Pressionado!');
  };

  return (
    <View style={styles.container}>
      <View>
          <Image 
            source={require('./assets/pajaro1.png')} 
            style={{ width: 100, height: 100 }} 
      />
      </View>
      <Text style={styles.titulo}>A.S.A {'\n'}
       Asossiação Salvação Animal</Text>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao} onPress={handleBotao1Press}>
          <Text style={styles.textoBotao}>Adoção</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={handleBotao2Press}>
          <Text style={styles.textoBotao}>Doação</Text>
        </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.texto}>Essa ong tem o dever de receber doações, ajudar, cuidar, tratar, e doar animais em situções de rua ou adoecidos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Preenche toda a tela
    backgroundColor: '#007bff', // Azul
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  titulo: {
    color: 'white', // Cor do texto do título
    fontSize: 26, // Tamanho do texto do título
    marginBottom: 20, // Espaçamento entre o título e os botões
    textAlign: "center"
  },
  texto: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32
  },
  containerBotao: {
    flexDirection: 'row', // Alinha os botões lado a lado
    justifyContent: 'space-between', // Espaçamento entre os botões
    width: '60%', // Largura do container para espaçar os botões
  },
  botao: {
    paddingVertical: 10, // Espaçamento vertical dentro do botão
    paddingHorizontal: 20, // Espaçamento horizontal dentro do botão
    backgroundColor: 'white', // Cor de fundo do botão
    borderRadius: 5, // Arredondamento do botão
  },
  textoBotao: {
    color: 'black', // Cor do texto do botão
  },
});

export default App;
