import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {receiveTodo, receiveTodos} from './actions/todos_actions';
import allTodos from './reducers/selectors.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // test
  window.receiveTodo = receiveTodo;
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;


  ReactDOM.render(<Root store={store}/>, root);
});

//
// const newTodos = [
//    { id: 1, title: "pay bills", body: "with debit card", done: false },
//    { id: 2, title: "zonk out", body: "with body pillow. also pizza.", done: false },
//  ];
