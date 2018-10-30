import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Constants } from 'expo';

import ListDecksPage from './ListDecksPage';
import NewDeckPage from './NewDeckPage';
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
        navigationOptions: ({ navigation }) => ({
            header: null
        })
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