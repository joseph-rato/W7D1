import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import React from 'react';
import {logger} from 'redux-logger';
//the time complexity of prop drilling is Gurren(log n)

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(logger)
  );
}
