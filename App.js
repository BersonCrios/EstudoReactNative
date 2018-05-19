import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";

import Post from './src/components/Post';
type Props = {};

/*
  Obtem o tamanho da tela - largura
*/
const width = Dimensions.get("screen").width;

export default class App extends Component<Props> {
  
  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(resposta => resposta.json())
    .then(json => this.setState(
      {
        fotos: json
      }
    ))
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => item.id}
        data={this.state.fotos}
        renderItem={({ item }) => (
          <Post foto={item}/>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
     marginTop: 30 
  },
});