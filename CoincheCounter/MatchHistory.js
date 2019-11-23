import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Text,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class MatchHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}>
          <Match
            team1name={'toto'}
            team2name={'tutu'}
            team1score={80}
            team2score={500}
          />
          <Match
            team1name={'toto'}
            team2name={'tutu'}
            team1score={500}
            team2score={120}
          />
          <Match
            team1name={'toto'}
            team2name={'tutu'}
            team1score={380}
            team2score={500}
          />
        </Modal>
      </View>
    );
  }
}

class Match extends Component {
  render() {
    return (
      <View style={styles.score}>
        <View style={styles.team1name}>
          <Text style={styles.textTeamName}>{this.props.team1name}</Text>
          <Text style={styles.textCounterPoint}>{this.props.team1score}</Text>
        </View>
        <View style={styles.team2name}>
          <Text style={styles.textTeamName}>{this.props.team2name}</Text>
          <Text style={styles.textCounterPoint}>{this.props.team2score}</Text>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
      </View>
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
});

export default MatchHistory;
