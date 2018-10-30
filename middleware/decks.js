import {ADD_DECK, addDeckError} from '../actions/decks';

const validateAuth = ({ dispatch, getState }) => next => action => {
    if (action.type === ADD_DECK) {
        if (typeof action.deck === 'undefined' || action.deck.title === '') {
            return dispatch(addDeckError("Please enter a title!"))
        }else {
            return next(action);
        }
    }

    return next(action);
};

export default validateAuth;