import {ADD_DECK, ADD_DECK_ERROR, RECEIVE_DECKS} from '../actions/decks';

export default function loading (state = { list: {}, error: null }, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                list: {...state.list,
                    [action.deck.title]: action.deck
                },
                error: null
            };
        case ADD_DECK_ERROR:
            return {
                ...state,
                error: action.error
            };
        case RECEIVE_DECKS:
            return {
                list: action.decks,
                error: null
            };
        default :
            return state
    }
}