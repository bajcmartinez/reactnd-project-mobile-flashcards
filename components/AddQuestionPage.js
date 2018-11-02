import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback} from "react-native";
import {Button, FormInput, FormLabel, FormValidationMessage} from 'react-native-elements';
import connect from "react-redux/es/connect/connect";
import {handleAddQuestion} from "../actions/decks";

import {colors, inputStyle, viewStyle} from '../styles';

class AddQuestionPage extends Component {
    static navigationOptions = {
        title: 'Add Question'
    };

    state = {
        question: '',
        answer: ''
    };

    _addQuestion(deck) {
        const { addQuestion, navigation } = this.props;
        addQuestion(deck, this.state.question, this.state.answer).then(() => {
            navigation.goBack();
        }).catch(() => {});
    }

    render() {
        const { navigation } = this.props;
        const deck = navigation.getParam('deck');
        return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={viewStyle.container}>
                <FormValidationMessage>{this.props.error}</FormValidationMessage>

                <FormLabel>Question</FormLabel>
                <FormInput
                    style={inputStyle.text}
                    onChangeText={(question) => this.setState({question})}
                    placeholder="Question"
                    autoFocus
                    value={this.state.question}
                />

                <FormLabel>Answer</FormLabel>
                <FormInput
                    style={inputStyle.text}
                    onChangeText={(answer) => this.setState({answer})}
                    placeholder="Answer"
                    value={this.state.anser}
                />

                <Button title="Add Question"
                        buttonStyle={inputStyle.button}
                        backgroundColor={colors.primaryColor}
                        onPress={() => this._addQuestion(deck)} />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    }
}

function mapStateToProps({ decks }) {
    return {
        error: decks.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (deck, question, answer) => dispatch(handleAddQuestion(deck, question, answer))
    }
}

AddQuestionPage.propTypes = {
    addQuestion: PropTypes.func.isRequired,
    error: PropTypes.string,
    navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionPage);
