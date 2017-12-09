import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/store';

const store = configureStore();

render(
    <div>Hello World</div>,
    document.getElementById('app')
);