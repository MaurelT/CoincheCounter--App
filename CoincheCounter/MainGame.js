/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

interface GameState {
  Team1count: Number;
  Team2count: Number;
  Team1name: String;
  Team12name: String;
  CurrentRound: number;
  modalVisibleConnection: boolean;
  modalVisibleHistory: boolean;
}

export default class MainGame extends Component<{}, GameState> {
  constructor(props) {
    super(props);
    this.state = {
      Team1count: 0,
      Team1name: 'Team 1',
      Team2count: 0,
      Team2name: 'Team 2',
      CurrentRound: 0,
      modalVisibleConnection: false,
      modalVisibleHistory: false,
    };
  }

  static navigationOptions = {
    title: 'Main Game',
  };

  render() {
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <View style={styles.score}>
            <View style={styles.team1name}>
              <TextInput
                style={styles.textTeamName}
                value={this.state.Team1name}
                onChange={name =>
                  this.setState({Team1name: name.nativeEvent.text})
                }
              />
              <Text style={styles.textCounterPoint}>
                {this.state.Team1count}
              </Text>
            </View>
            <View style={styles.team2name}>
              <TextInput
                style={styles.textTeamName}
                value={this.state.Team2name}
                onChange={name =>
                  this.setState({Team2name: name.nativeEvent.text})
                }
              />
              <Text style={styles.textCounterPoint}>
                {this.state.Team2count}
              </Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.addPoint}>
              <TextInput
                style={styles.counter}
                keyboardType={'numeric'}
                numeric
                value={this.state.CurrentRound.toString()}
                onChange={score =>
                  this.setState({CurrentRound: Number(score.nativeEvent.text)})
                }
              />
            </View>
            <View style={styles.whatTeam}>
              <View style={styles.team1}>
                <Button
                  color="#0984e3"
                  title={this.state.Team1name}
                  onPress={() =>
                    this.setState({
                      Team1count:
                        this.state.Team1count + this.state.CurrentRound,
                      CurrentRound: 0,
                    })
                  }
                />
              </View>
              <View style={styles.team2}>
                <Button
                  color="#d63031"
                  title={this.state.Team2name}
                  onPress={() =>
                    this.setState({
                      Team2count:
                        this.state.Team2count + this.state.CurrentRound,
                      CurrentRound: 0,
                    })
                  }
                />
              </View>
            </View>
            <View style={styles.endGame}>
              <Button
                style={styles.textEndGame}
                color="#778ca3"
                title="End Game"
                onPress={() => this.props.navigation.navigate('Connection')}
              />
              <Button
                style={styles.textEndGame}
                color="#778ca3"
                title="History"
                onPress={() => this.props.navigation.navigate('History')}
              />
            </View>
          </View>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202029',
  },
  score: {
    flex: 2,
    flexDirection: 'row',
  },
  team1name: {
    flex: 0.5,
    backgroundColor: '#0984e3',
  },
  team2name: {
    flex: 0.5,
    backgroundColor: '#d63031',
  },
  textTeamName: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  textCounterPoint: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
  },
  content: {
    flex: 10,
  },
  addPoint: {
    flex: 8,
    justifyContent: 'center',
  },
  counter: {
    fontSize: 100,
    textAlign: 'center',
    color: 'white',
  },

  whatTeam: {
    flex: 1,
    flexDirection: 'row',
  },
  team1: {
    flex: 0.5,
    justifyContent: 'center',
  },
  team2: {
    flex: 0.5,
    justifyContent: 'center',
  },
  endGame: {
    flex: 1,
  },
  textEndGame: {
    textAlign: 'center',
    color: '#202029',
  },
});

/*
   <Connection modalVisible={this.state.modalVisibleConnection} />
   <History modalVisible={this.state.modalVisibleHistory} />
 */
