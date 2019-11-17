import React, {Component} from 'react';
import {
  Modal,
  TextInput,
  TouchableHighlight,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

class ModalExample extends Component {
  state = {
    username: '',
    password: '',
  };

  sendInfo = () => {
      fetch('http://localhost:4000/api/users/register', {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(this.state)
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result)
          })
  };

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
              <TextInput placeholder={'Username'} value={this.state.username} />
              <TextInput placeholder={'Password'} value={this.state.password} />
              <Button
                color="#d63031"
                title="Submit"
                onPress={this.sendInfo()}
              />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default ModalExample;
