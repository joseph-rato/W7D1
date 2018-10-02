import {RECEIVE_TODOS} from '../actions/todos_actions';
import {RECEIVE_TODO} from '../actions/todos_actions';
import merge from 'lodash/merge';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  console.log("Inside the Todos reducer now");
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.map( (todo) => {
        newState[todo.id]= todo;
      });
      return newState;
      case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
