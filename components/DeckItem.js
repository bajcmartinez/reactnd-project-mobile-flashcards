import React from "react";
import { ListItem } from 'react-native-elements';

const DeckItem = ({ item, index }) => {
    return <ListItem
        title={item.title}
        badge={{ value: item.questions.length.toString() }} />;
};

export default DeckItem;