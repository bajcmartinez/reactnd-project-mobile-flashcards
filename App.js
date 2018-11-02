import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import middleware from './middleware';
import reducer from './reducers';

import AppContainer from './components/AppContainer';
import { setLocalNotification } from './api/notifications';

const store = createStore(reducer, middleware);

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
