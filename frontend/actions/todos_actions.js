import React from 'react';
console.log("It is action time");

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => (
  {
    type: RECEIVE_TODOS,
    todos: todos
  }
);

export const receiveTodo = (todo) => (
  {
    type: RECEIVE_TODO,
    todo: todo
    //i bless the rains down in afriiica
  }
);
