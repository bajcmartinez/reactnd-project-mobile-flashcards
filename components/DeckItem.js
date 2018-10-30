import { Text, View } from "react-native";
import React from "react";

const DeckItem = ({ item }) => {
    return <View>
        <Text>Hello! {item.title}</Text>
    </View>;
};

export default DeckItem;