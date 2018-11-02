import React, { Component } from "react";
import { Text, View } from "react-native";
import {Card} from 'react-native-elements';
import PropTypes from 'prop-types';

import {viewStyle} from '../styles';
import QuizQuestionButtons from './QuizQuestionButtons';

class QuizQuestion extends Component {
    state = {
        showAnswer: false
    };

    static getDerivedStateFromProps() {
        return {
            showAnswer: false
        }
    }

    _toggleAnswer = () => {
        this.setState({
            ...this.state,
            showAnswer: !this.state.showAnswer
        });
    };

    render() {
        const { question, validateAnswer } = this.props;
        const { showAnswer } = this.state;

        return (
            <View style={viewStyle.container}>
                <Card title={question.question}>
                    <Text style={{marginBottom: 10}}>
                        Remember to do your best to get the answer right, after you know it, click show answer and give us feedback on how it went!
                    </Text>

                    {showAnswer && (
                        <View style={viewStyle.answer}>
                            <Text style={viewStyle.answerTitle}>Answer:</Text>
                            <Text>{question.answer}</Text>
                        </View>
                    )}

                    <QuizQuestionButtons showAnswer={this.state.showAnswer} toggleAnswer={this._toggleAnswer} validateAnswer={validateAnswer} />
                </Card>;
            </View>
        )
    }
}

QuizQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    validateAnswer: PropTypes.func.isRequired
};

export default QuizQuestion;
