const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo, index) => {
    return <h2 key={index}>{todo.todo}</h2>;
  });

  return (
    <div>
      <h2>Not-so-smart Todos!!!</h2>
      {mappedTodos}
    </div>
  );
};

export default TodoList;
