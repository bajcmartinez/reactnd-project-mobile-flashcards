import React, { Component } from "react";
import { Text } from "react-native";
import { Card, Button } from 'react-native-elements';
import { colors, inputStyle } from "../styles";
import connect from "react-redux/es/connect/connect";
import {handleRemoveDeck} from "../actions/decks";

class DeckDetailsPage extends Component {
    static navigationOptions = {
        title: 'Details'
    };

    _deleteDeck() {
        const { removeDeck, navigation } = this.props;
        removeDeck(this.props.deck).then(() => {
            navigation.goBack();
        });
    }

    _addQuestion() {
        const { deck } = this.props;
        this.props.navigation.navigate('AddQuestionPage', { deck });
    }

    _startQuiz() {
        const { deck } = this.props;
        this.props.navigation.navigate('QuizPage', { deck });
    }

    render() {
        const { deck } = this.props;

        return <Card title={deck.title}>
            <Text style={{marginBottom: 10}}>
                This deck contains {deck.questions.length} questions!
            </Text>

            <Button title="Add Questions"
                    buttonStyle={inputStyle.button}
                    backgroundColor={colors.primaryColor}
                    onPress={() => this._addQuestion()} />

            <Button title="Start Quiz"
                    buttonStyle={inputStyle.button}
                    backgroundColor={colors.secondaryColor}
                    onPress={() => this._startQuiz()} />

            <Button title="Delete"
                    buttonStyle={inputStyle.button}
                    backgroundColor={colors.dangerColor}
                    onPress={() => this._deleteDeck()} />
        </Card>;
    }
}

function mapStateToProps({ decks }, { navigation }) {
    const title = navigation.getParam('title');
    return {
        deck: decks.list[title]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeDeck: (title) => dispatch(handleRemoveDeck(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetailsPage);