import React from 'react';
// import {receiveTodo} from "../../actions/todos_actions";

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    event.preventDefault();
    this.setState({[name]: event.target.value});
    // return () => this.setState({event: event.target.value} );
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state);
    todo.id = new Date().getTime();
    this.props.addTodo(todo);
  }



  render() {
    return (
      <div className="todo-form-container">
        <form onSubmit={this.handleSubmit}>
          <label className="form-label">Task
            <input name="title" type="text" onChange={this.handleChange}></input>
          </label>
          <label className="form-label">Description
            <input name="body" type="text"  onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Create Task"></input>
        </form>
      </div>
    );
  }
}

export default TodoForm;
