import { StyleSheet } from 'react-native';

export const colors = {
    primaryColor: '#7a42f4',
    secondaryColor: '#e5e5e5',
    dangerColor: '#a00',

    secondaryText: '#fff'
};

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
        borderColor: colors.primaryColor,
        padding: 10
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        height: 40,
    },

    buttonText: {
        color: colors.secondaryText
    }
});