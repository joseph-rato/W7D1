import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from "./todo_form";

const TodoList = ({todos, addTodo}) => {
  return (
  <div>
    <TodoForm addTodo = {addTodo}/>
    <ul>
      {
        todos.map( (todo) =>
        <TodoListItem
          title ={todo.title}
          />)
      }
    </ul>

  </div>
  );
};

export default TodoList;
