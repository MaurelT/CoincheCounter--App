import React, {Component} from 'react';
import {Modal, TextInput, TouchableHighlight, View, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

class ModalExample extends Component {



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