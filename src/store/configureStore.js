// IMPORT PACKAGE REFERENCES

import { createStore, applyMiddleware, compose } from 'redux';

// IMPORT MIDDLEWARE

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

// IMPORT REDUCERS

import AppReducer from '../reducers/AppReducer';

// CONFIGURE STORE

const configureStore = ( preloadedState ) => {
  const store = createStore(
    AppReducer,
    preloadedState,
    compose(
      applyMiddleware( thunk, promiseMiddleware(), createLogger() ),
    ),
  );

  if ( module.hot ) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept( '../reducers/AppReducer', () => {
      store.replaceReducer( AppReducer );
    } );
  }

  return store;
};

export default configureStore;
