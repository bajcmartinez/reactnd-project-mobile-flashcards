import {ADD_DECK, ADD_QUESTION, addDeckError} from '../actions/decks';

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
    } else if (action.type === ADD_QUESTION) {
        const { decks } = getState();

        if (action.question === '' || action.answer === '') {
            return dispatch(addDeckError("Please enter a question and an answer!"))
        } else if (decks.list[action.deck.title].questions.find((question) => question.question === action.question)) {
            return dispatch(addDeckError("Question already in use for this deck!"))
        } else {
            return next(action);
        }
    }

    return next(action);
};

export default validateAuth;