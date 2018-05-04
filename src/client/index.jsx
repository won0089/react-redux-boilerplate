import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'stores';
import Demo from 'components/Demo';

const store = configureStore();

render(
    <Provider store={store}>
        <Demo />
    </Provider>,
    document.getElementById('app')
);
