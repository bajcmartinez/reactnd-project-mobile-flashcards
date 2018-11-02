import React from "react";
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

const DeckListItem = ({ deck, onPressItem }) => {
    return <ListItem
        title={deck.title}
        badge={{ value: deck.questions.length.toString() }}
        onPress={() => onPressItem(deck)}/>;
};

DeckListItem.propTypes = {
    deck: PropTypes.object.isRequired,
    onPressItem: PropTypes.func.isRequired
};

export default DeckListItem;
