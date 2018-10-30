import { StyleSheet } from 'react-native';
import {} from '../actions/decks';

const primaryColor = '#7a42f4';
const secondaryText = '#fff';

export const viewStyle = StyleSheet.create({
    container: {
        flex: 1,
    },

    centerVertically: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
    },

    title: {
        fontSize: 30,
        marginBottom: 25
    }
});

export const inputStyle = StyleSheet.create({
    text: {
        margin: 15,
        height: 40,
        borderWidth: 1,
        borderColor: primaryColor,
        padding: 10
    },

    button: {
        backgroundColor: primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 15,
        height: 40,
    },

    buttonText: {
        color: secondaryText
    }
});