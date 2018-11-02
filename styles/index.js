import { StyleSheet } from 'react-native';

export const colors = {
    primaryColor: '#7a42f4',
    secondaryColor: '#c0c066',
    dangerColor: '#a00',
    okColor: '#090',

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

    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    },

    title: {
        fontSize: 30,
        marginBottom: 25
    },

    answerTitle: {
        marginBottom: 5,
        fontWeight: 'bold'
    },

    answer: {
        padding: 10,
        backgroundColor: '#0af',
        marginTop: 10,
        marginBottom: 20
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