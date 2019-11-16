/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableWithoutFeedback,

} from 'react-native';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
);

export default class App
    extends Component<
        {},
        {
          Team1count: Number,
          Team2count : Number,
          Team1name: String,
          Team12name: String,
          CurrentRound: number,
        }
        > {
  state = {
    Team1count: 0,
    Team1name: 'Team 1',
    Team2count: 0,
    Team2name: 'Team 2',
    CurrentRound: 0,
  };

  render() {
    return (
        <DismissKeyboard>
        <View style={styles.container}>
          <TextInput style={styles.team1name} value={this.state.Team1name} onChange={name => this.setState({Team1name: name.nativeEvent.text})}/>
          <Text>{this.state.Team1count}</Text>
          <TextInput style={styles.team2name} value={this.state.Team2name} onChange={name => this.setState({Team2name: name.nativeEvent.text})}/>
          <Text>{this.state.Team2count}</Text>
          <Button
              title='End Game'
              onPress={() => this.setState({ Team1count: 0 , Team2count: 0 , CurrentRound: 0 })}
          />
          <TextInput style={styles.counter} keyboardType={'numeric'} numeric value={this.state.CurrentRound.toString()} onChange={score => this.setState({CurrentRound: Number(score.nativeEvent.text)})}/>
          <Button
              title={this.state.Team1name}
              onPress={() => this.setState({ Team1count: this.state.Team1count + this.state.CurrentRound , CurrentRound: 0 })}
          />
            <Button
                title={this.state.Team2name}
                onPress={() => this.setState({ Team2count: this.state.Team2count + this.state.CurrentRound , CurrentRound: 0 })}
            />
        </View>
  </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  team1name: {
    textAlign: 'left',
  },
  team2name: {
    textAlign: 'right',
  },
  counter: {
    marginTop: '20%',
  },
});
