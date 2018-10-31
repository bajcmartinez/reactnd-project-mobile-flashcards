import React from "react";
import { ListItem } from 'react-native-elements';

const DeckListItem = ({ deck, onPressItem }) => {
    return <ListItem
        title={deck.title}
        badge={{ value: deck.questions.length.toString() }}
        onPress={() => onPressItem(deck)}/>;
};

export default DeckListItem;