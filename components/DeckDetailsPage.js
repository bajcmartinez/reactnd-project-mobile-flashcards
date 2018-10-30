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

    _deleteDeck(deck) {
        const { removeDeck, navigation } = this.props;
        removeDeck(deck).then(() => {
            navigation.goBack();
        });
    }

    render() {
        const { navigation } = this.props;
        const deck = navigation.getParam('deck');
        return <Card title={deck.title}>
            <Text style={{marginBottom: 10}}>
                This deck contains {deck.questions.length} questions!
            </Text>

            <Button title="Add Questions"
                    buttonStyle={inputStyle.button}
                    backgroundColor={colors.primaryColor}/>

            <Button title="Start Quiz"
                    buttonStyle={inputStyle.button}
                    backgroundColor={colors.secondaryColor}/>

            <Button title="Delete"
                    buttonStyle={inputStyle.button}
                    backgroundColor={colors.dangerColor}
                    onPress={() => this._deleteDeck(deck)} />
        </Card>;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeDeck: (title) => dispatch(handleRemoveDeck(title))
    }
}

export default connect(null, mapDispatchToProps)(DeckDetailsPage);