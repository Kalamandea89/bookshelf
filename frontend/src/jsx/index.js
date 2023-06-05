import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';

/*
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
*/

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App  tab="home" />
    </Provider>);