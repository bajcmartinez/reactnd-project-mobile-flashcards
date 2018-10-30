import {ADD_DECK, ADD_DECK_ERROR} from '../actions/decks';

export default function loading (state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                list: [...state, action.deck],
                error: null
            };
        case ADD_DECK_ERROR:
            return {
                ...state,
                error: action.error
            };
        default :
            return state
    }
}