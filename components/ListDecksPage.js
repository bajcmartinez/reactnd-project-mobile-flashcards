import React from 'react';
import { View, FlatList } from 'react-native';
import connect from "react-redux/es/connect/connect";

import { viewStyle } from '../styles';
import { handleLoadDecks } from "../actions/decks";

import DeckListItem from './DeckListItem';

class ListDecksPage extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    componentDidMount() {
        this.props.loadDecks();
    }

    _onPressItem = (deck) => {
        this.props.navigation.navigate('DeckDetailsPage', { title: deck.title });
    };

    _renderItem = ({ item }) => (
        <DeckListItem deck={item} onPressItem={this._onPressItem} />
    );

    render() {
        const { decks } = this.props;
        return (
            <View style={viewStyle.container}>
                <FlatList
                    data={decks}
                    renderItem={this._renderItem}
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