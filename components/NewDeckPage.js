import React from 'react';
import { connect } from "react-redux";
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native';

import { viewStyle, inputStyle } from '../styles';
import { handleAddDeck } from '../actions/decks';

class NewDecksPage extends React.Component {
    state = {
      title: ''
    };

    addDeck() {
        const { addDeck, navigation } = this.props;

        addDeck(this.state.title.trim()).then(() => {
            if (this.props.error) {
                Alert.alert('', this.props.error);
            } else {
                this.setState({
                    title: ''
                });

                navigation.navigate("ListDecksPage");
            }
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style={viewStyle.centerVertically}>
                <TextInput
                    style={inputStyle.text}
                    onChangeText={(title) => this.setState({title})}
                    placeholder="title"
                    autoFocus
                    value={this.state.title}
                />

                <TouchableOpacity
                    style={inputStyle.button}
                    onPress={() => this.addDeck(this.state.title)}>

                    <Text style = {inputStyle.buttonText}>Add Deck</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps({ decks }) {
    return {
        error: decks.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addDeck: (title) => dispatch(handleAddDeck({ title }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDecksPage);