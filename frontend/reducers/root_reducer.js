import {combineReducers} from 'redux';
import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
  todos5: todosReducer
});

export default rootReducer;
