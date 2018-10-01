import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<App />, root);
});


// const newTodos = [
//   { id: 1, title: "pay bills", body: "with debit card", done: false },
//   { id: 2, title: "zonk out", body: "with body pillow. also pizza.", done: false },
// ];
