/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Platform, Text, TextInput } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  constructor(props) {
    super(props);
    //initialize the text variable section
    this.state = {text: ''};
  }
  render() {
    let pic = {
      uri: 'http://www.2oceansvibe.com/wp-content/uploads/2016/04/Northgate-Park-aerial-view-of-development-4-blocks-in-centre-resized-1.jpg'
    };
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>xmotion</Text>
          <Text style={styles.slogan}>Let us take you there.</Text>
        </View>
        <View>
          <TextInput
            style={{ height: 40 }}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({ text })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 75,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 37,
    marginBottom: 5,
  },
  slogan: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    marginBottom: 5
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
