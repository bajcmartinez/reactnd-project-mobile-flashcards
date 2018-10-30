import * as api from '../api';
import { showLoading, hideLoading } from "./loading";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_DECK_ERROR = 'ADD_DECK_ERROR';

export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addDeckError(error) {
    return {
        type: ADD_DECK_ERROR,
        error
    }
}

export const handleLoadDecks = () => (dispatch) => {
    dispatch(showLoading());
    return api.getDecks().then((decks) => {
        dispatch(hideLoading());
        dispatch(receiveDecks(decks));
    });
};

export const handleAddDeck = (deck) => (dispatch) => {
    deck = {
        questions: [],
        ...deck
    };
    return api.saveDeck(deck).then(() => {
        dispatch(addDeck(deck));
    });
};