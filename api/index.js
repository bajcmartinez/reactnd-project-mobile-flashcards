import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY';

export function saveDeck (deck) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deck.name]: deck
    }))
}

export function removeDeck (name) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const { [name]: omit, ...decks } = JSON.parse(results);

            AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(decks));
        })
}