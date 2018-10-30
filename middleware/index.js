import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

import decks from './decks';

export default applyMiddleware(
    thunk,
    decks
)