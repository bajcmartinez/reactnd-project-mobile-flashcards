import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY';

export function getDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
}

export function saveDeck (deck) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deck.title]: deck
    })).then(() => deck)
}

export function removeDeck (title) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const { [title]: omit, ...decks } = JSON.parse(results);
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
        })
}

export function addQuestion (deck, question, answer) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deck.title]: {
            ...deck,
            questions: [
                ...deck.questions, {
                    question,
                    answer
                }
            ]
        }
    })).then(() => deck)
}