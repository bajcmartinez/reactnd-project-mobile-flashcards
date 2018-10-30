import {ADD_DECK, addDeckError} from '../actions/decks';

const validateAuth = ({ dispatch, getState }) => next => action => {
    if (action.type === ADD_DECK) {
        const { decks } = getState();

        if (typeof action.deck === 'undefined' || action.deck.title === '') {
            return dispatch(addDeckError("Please enter a title!"))
        } else if (decks.list[action.deck.title] != null) {
            return dispatch(addDeckError("Title already in use!"))
        } else {
            return next(action);
        }
    }

    return next(action);
};

export default validateAuth;