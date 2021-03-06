import * as api from '../api';
import { showLoading, hideLoading } from "./loading";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_DECK_ERROR = 'ADD_DECK_ERROR';
export const REMOVE_DECK = 'REMOVE_DECK';

export const ADD_QUESTION = 'ADD_QUESTION';

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

export function addQuestion (deck, question, answer) {
    return {
        type: ADD_QUESTION,
        deck,
        question,
        answer
    }
}

export function addDeckError(error) {
    return {
        type: ADD_DECK_ERROR,
        error
    }
}

export function removeDeck (deck) {
    return {
        type: REMOVE_DECK,
        deck,
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
    const { decks } = getState();
    if (decks.error) {
        return Promise.reject(decks.error);
    } else {
        return api.saveDeck(deck).catch((e) => {
            console.warn(e);
            dispatch(removeDeck(deck));
        });
    }
};

export const handleRemoveDeck = (deck) => (dispatch) => {
    dispatch(removeDeck(deck));
    return api.removeDeck(deck.title).catch((e) => {
        console.warn(e);
        dispatch(addDeck(deck));
    });
};

export const handleAddQuestion = (deck, question, answer) => (dispatch, getState) => {
    dispatch(addQuestion(deck, question, answer));
    const { decks } = getState();
    if (decks.error) {
        return Promise.reject(new Error(decks.error));
    } else {
        return api.addQuestion(deck, question, answer).catch((e) => {
            console.warn(e);
        });
    }
};