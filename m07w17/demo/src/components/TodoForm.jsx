import {useState} from 'react';

const TodoForm = (props) => {
  const [newTodo, setNewTodo] = useState('');

  const onClick = () => {
    props.addNewTodo(newTodo);
  };

  return (
    <div>
      <h2>Create a new todo below!!</h2>
      <div>
        <label>New todo:</label>
        <input 
          value={newTodo}
          onChange={(event) => { setNewTodo(event.target.value) }}
        />
        <button onClick={onClick}>Create!</button>
      </div>
    </div>
  );
};

export default TodoForm;
