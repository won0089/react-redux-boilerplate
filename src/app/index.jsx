import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Demo from './components/Demo';

const store = configureStore();

render(
    <Provider store={store}>
        <Demo />
    </Provider>,
    document.getElementById('app')
);