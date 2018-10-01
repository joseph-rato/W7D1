//All of the app stuff
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

const Root = (store) => ({
  <Provider store={store}>
    <h1>A List of Things to Do Today</h1>
  </Provider>
});
