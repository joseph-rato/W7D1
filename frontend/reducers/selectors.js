

const allTodos = (state) => {
  let keyArr = Object.keys(state.todos);
  let newArray =[];


  // maybe further directions for future requests
  keyArr.map( (key) => {
    newArray.push(state.todos[key]);
  });
//  Object.keys(state.todos).map( (todo) =>{
//    newArray.push(todo) ;
//  });
  return newArray;
};

export default allTodos;
