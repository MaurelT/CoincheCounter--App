import React, {Component} from 'react';
import {Modal, TextInput, TouchableHighlight, View, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

class ModalExample extends Component {

    state = {
        Team1count: 0,
        Team1name: 'Team 1',
        Team2count: 0,
        Team2name: 'Team 2',
        CurrentRound: 0,
        modalVisible: false,
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
                            <TextInput placeholder={'Username'}></TextInput>
                            <TextInput placeholder={'Password'}></TextInput>
                        </View>
                    </View>
                </Modal>

            </View>
        );
    }
}

export default ModalExample;