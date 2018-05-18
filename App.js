import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";

type Props = {};

/*
  Obtem o tamanho da tela - largura
*/
const width = Dimensions.get("screen").width;

export default class App extends Component<Props> {
  render() {

    /*
      Criando Lista de usuários
    */
    const fotos = [
      { id: "1", usuario: "Guilherme" },
      { id: "2", usuario: "Taveira" },
      { id: "3", usuario: "Berson" }
    ];

    return (
      <FlatList
      style={{ marginTop: 20 }}
        keyExtractor={item => item.id}
        data={fotos}
        renderItem={
          ({item}) =>
          <View>
            <Text>{item.usuario}</Text>
            <Image
              source={require("./resources/img/23380327_371982659917927_2927897850807027661_n.jpg")}
              style={{ width: width, height: width }}
            />
          </View>
        }
      />
      // <ScrollView style={{ marginTop: 20 }}>
      //   {fotos.map(foto => 
      //     <View key={foto.id}>
      //       <Text>{foto.usuario}</Text>
      //       <Image
      //         source={require("./resources/img/23380327_371982659917927_2927897850807027661_n.jpg")}
      //         style={{ width: width, height: width }}
      //       />
      //     </View>
      //   )}
      // </ScrollView>
    );
  }
}
