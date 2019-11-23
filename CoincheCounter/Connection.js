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

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  sendInfo = () => {
    fetch('http://localhost:4000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.closeView}>
          <Button
            style={styles.buttonStyle}
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
              value={this.state.username.toString()}
              onChange={username =>
                this.setState({username: Number(username.nativeEvent.text)})
              }
            />
            <TextInput
              placeholder={'Password'}
              placeholderTextColor="#bdc3c7"
              style={styles.inputText}
              value={this.state.password.toString()}
              onChange={password =>
                this.setState({password: Number(password.nativeEvent.text)})
              }
            />
          </View>
          <Button
            style={styles.inputText}
            color="#0984e3"
            title="Submit"
            onPress={this.sendInfo()}
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
  },
  buttonStyle: {
    marginRight: 100,
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
