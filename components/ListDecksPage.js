import React from 'react';
import { View, FlatList } from 'react-native';
import connect from "react-redux/es/connect/connect";

import { viewStyle } from '../styles';
import { handleLoadDecks } from "../actions/decks";

import DeckItem from './DeckItem';

class ListDecksPage extends React.Component {
    componentDidMount () {
        this.props.loadDecks();
    }

    render() {
        const { decks } = this.props;
        return (
            <View style={viewStyle.container}>
                <FlatList
                    data={decks}
                    renderItem={DeckItem}
                    keyExtractor={(item, index) => index.toString()}>
                </FlatList>
            </View>
        );
    }
}

function mapStateToProps({ decks }) {
    return {
        decks: Object.values(decks.list)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadDecks: () => dispatch(handleLoadDecks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDecksPage);