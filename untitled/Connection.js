/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Modal,
  TextInput,
  Button,
  TouchableHighlight,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import Storage from './Storage';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

interface ConnectionState {
  username: string;
  password: string;
  data: JSON;
}

export default class Connection extends Component<{}, ConnectionState> {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Notche',
      password: '123456',
      data: [],
    };
  }

  sendInfo = () => {
    fetch(
      'http://192.168.0.13:3000/users/connect/' +
        this.state.username +
        '/' +
        this.state.password,
      {
        method: 'GET',
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => {
        this.setState({data: response});
        alert(JSON.stringify(this.state.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.closeView}>
          <Button
            color="#d63031"
            title="Close"
            onPress={() => this.props.navigation.navigate('MainGame')}
          />
        </View>
        <View style={styles.inputBox}>
          <View>
            <TextInput
              placeholder={'Username'}
              placeholderTextColor="#bdc3c7"
              style={styles.inputText}
              value={this.state.username}
              onChange={username =>
                this.setState({username: username.nativeEvent.text})
              }
            />
            <TextInput
              placeholder={'Password'}
              placeholderTextColor="#bdc3c7"
              style={styles.inputText}
              value={this.state.password}
              onChange={password =>
                this.setState({password: password.nativeEvent.text})
              }
            />
          </View>
          <Button
            style={styles.inputText}
            color="#0984e3"
            title="Submit"
            onPress={() => this.sendInfo()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202029',
  },
  closeView: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: 15,
  },
  inputBox: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    marginBottom: 10,
  },
});
