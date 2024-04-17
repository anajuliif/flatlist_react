import { View, Text, FlatList } from "react-native";
import { styles } from "./styles/Stylesheet";

export default function App() {
  const data = [
    { livro: "Matheus", backgroundColor: "#ffffff" },
    { livro: "Marcos", backgroundColor: "#e6ccef" },
    { livro: "Lucas", backgroundColor: "#cb9bde" },
    { livro: "João", backgroundColor: "#af69cd" },
    { livro: "Eclesiastes", backgroundColor: "#9032bb" },
    { livro: "Filipenses", backgroundColor: "#7900ac" },
    { livro: "I Timóteo", backgroundColor: "#6d00a1" },
    { livro: "II Timóteo", backgroundColor: "#620096" },
    { livro: "Judas", backgroundColor: "#56008c" },
    { livro: "Apocalipse", backgroundColor: "#4b0081" },
  ];

  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.box,
        styles.box2,
        { backgroundColor: item.backgroundColor },
      ]}
    >
      <Text style={styles.txt}>{item.livro}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.box2}></View>
      </View>
      <FlatList
        horizontal={true}
        data={data} // Ele está recebendo todos os objetos do nosso array data
        renderItem={renderItem} // Chama a função para renderizar as Views box
        keyExtractor={(data) => data.id} // Extrair o id do objeto
      />
      <FlatList
        data={data} // Ele está recebendo todos os objetos do nosso array data
        renderItem={renderItem} // Chama a função para renderizar as Views box
        keyExtractor={(data) => data.id} // Extrair o id do objeto
      />
      <View style={styles.footer}></View>
    </View>
  );
}
