import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

import decks from './decks';

export default applyMiddleware(
    thunk,
    decks
)