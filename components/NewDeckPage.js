import React from 'react';
import { connect } from "react-redux";
import { Button } from 'react-native-elements';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


import { viewStyle, inputStyle, colors } from '../styles';
import { handleAddDeck } from '../actions/decks';

class NewDecksPage extends React.Component {
    state = {
      title: ''
    };

    addDeck() {
        const { addDeck, navigation } = this.props;

        addDeck(this.state.title.trim())
            .then((deck) => {
            if (!this.props.error) {
                this.setState({
                    title: ''
                });

                navigation.navigate('DeckDetailsPage', { title: deck.title });
            }
        }).catch(() => {});
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView style={viewStyle.centerVertically}>
                    <FormLabel>Title</FormLabel>
                    <FormInput
                        style={inputStyle.text}
                        onChangeText={(title) => this.setState({title})}
                        placeholder="Title"
                        autoFocus
                        value={this.state.title}
                    />
                    <FormValidationMessage>{this.props.error}</FormValidationMessage>

                    <Button title="Add Deck"
                            buttonStyle={inputStyle.button}
                            backgroundColor={colors.primaryColor}
                            onPress={() => this.addDeck(this.state.title)} />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
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