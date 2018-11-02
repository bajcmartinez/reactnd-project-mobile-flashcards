import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import {
    clearLocalNotification,
    setLocalNotification
} from '../api/notifications';

import {colors, inputStyle, viewStyle} from '../styles';
import QuizQuestion from './QuizQuestion';

class QuizPage extends Component {
    static navigationOptions = ({ navigation}) => {
        const deck = navigation.getParam('deck');
        return {
            title: `Quiz: ${deck.title}`
        }
    };

    _resetQuiz = () => {
        const { navigation } = this.props;
        const deck = navigation.getParam('deck');

        this.setState({
            questions: deck.questions.sort(() => Math.random() - 0.5),
            currentQuestion: 0,
            correct: 0,
            ended: false
        });
    };

    _goHome = () => {
        this.props.navigation.popToTop();
    };

    _validateAnswer = (isCorrect) => {
        let { currentQuestion, correct, ended, questions } = this.state;

        currentQuestion++;
        ended = currentQuestion >= questions.length;

        if (isCorrect) {
            correct++;
        }

        if (ended) {
            clearLocalNotification().then(setLocalNotification);
        }

        this.setState({
            ...this.state,
            correct,
            currentQuestion,
            ended
        });
    };

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const deck = navigation.getParam('deck');

        this.state = {
            questions: deck.questions.sort(() => Math.random() - 0.5),
            currentQuestion: 0,
            correct: 0,
            ended: false
        }
    }

    render() {
        const { questions, currentQuestion, correct, ended } = this.state;

        if (questions.length === 0) {
            return <View style={viewStyle.container}>
                <Text style={viewStyle.title}>No questions are yet loaded!</Text>
            </View>
        }

        if (ended) {
            return <View style={viewStyle.centered}>
                <Text style={viewStyle.title}>Quiz Ended!</Text>
                <Text>{correct} questions right out of {questions.length}</Text>

                <Button title="Reset Quiz!"
                        buttonStyle={inputStyle.button}
                        backgroundColor={colors.secondaryColor}
                        onPress={() => this._resetQuiz()}
                />

                <Button title="Go Home!"
                        buttonStyle={inputStyle.button}
                        backgroundColor={colors.primaryColor}
                        onPress={() => this._goHome()}
                />
            </View>
        }

        return <View style={viewStyle.container}>
            <QuizQuestion question={questions[currentQuestion]} validateAnswer={this._validateAnswer} />
        </View>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (deck, question, answer) => dispatch(handleAddQuestion(deck, question, answer))
    }
}

export default connect(null, mapDispatchToProps)(QuizPage);