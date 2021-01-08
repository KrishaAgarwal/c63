import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Text: 'Hola',
      displayText: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#d4b424'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: {
              fontSize: 20,
              color: 'black',
            },
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({
              displayText: this.state.text,
            });
          }}></TouchableOpacity>
        <Text>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
});
