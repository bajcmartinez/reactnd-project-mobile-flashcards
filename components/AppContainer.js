import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Constants } from 'expo';

import ListDecksPage from './ListDecksPage';
import DeckDetailsPage from './DeckDetailsPage';
import AddQuestionPage from './AddQuestionPage';

import NewDeckPage from './NewDeckPage';
import QuizPage from "./QuizPage";
import { Ionicons } from '@expo/vector-icons';

function AppStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const tabNavigator = Platform.OS === 'ios' ? createBottomTabNavigator : createMaterialTopTabNavigator;
const Tabs = tabNavigator({
    ListDecksPage: {
        screen: ListDecksPage,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'} size={32} color={tintColor} />
        },
    },

    NewDecksPage: {
        screen: NewDeckPage,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} size={32} color={tintColor} />
        },
    },
});

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: () => ({
            header: null
        })
    },

    DeckDetailsPage: {
        screen: DeckDetailsPage
    },
    AddQuestionPage: {
        screen: AddQuestionPage
    },
    QuizPage: {
        screen: QuizPage
    }
});

export default function AppContainer() {
    return (
        <View style={{flex: 1}}>
            <AppStatusBar barStyle="light-content" />
            <MainNavigator />
        </View>
    )
};