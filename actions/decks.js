import * as api from '../api';
import { showLoading, hideLoading } from "./loading";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_DECK_ERROR = 'ADD_DECK_ERROR';
export const REMOVE_DECK = 'REMOVE_DECK';

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

export function removeDeck ({ title }) {
    return {
        type: REMOVE_DECK,
        title,
    }
}

export const handleLoadDecks = () => (dispatch) => {
    dispatch(showLoading());
    return api.getDecks().then((decks) => {
        dispatch(hideLoading());
        dispatch(receiveDecks(decks));
    });
};

export const handleAddDeck = (deck) => (dispatch, getState) => {
    deck = {
        questions: [],
        ...deck
    };
    dispatch(addDeck(deck));
    return api.saveDeck(deck).catch(() => {
        dispatch(removeDeck(deck));
    });
};