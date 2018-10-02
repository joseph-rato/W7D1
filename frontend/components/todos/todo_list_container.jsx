
import {connect} from 'react-redux';
import TodoList from './todo_list';
import {receiveTodo} from '../../actions/todos_actions';
import allTodos from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos( state )
  // state.todos
  // allTodos( state )
  // the state.todos is suppose to be passed through the selector
});

const mapDispatchToProps = (dispatch) => ({
   addTodo: (todo) => dispatch(receiveTodo(todo))
 });


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
