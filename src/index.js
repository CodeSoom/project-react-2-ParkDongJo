import React from 'react';
import ReactDOM from 'react-dom';

import {
  MemoryRouter,
} from 'react-router-dom';

import App from './App';

import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './store';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  (
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
