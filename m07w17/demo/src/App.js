import './App.css';
import Product from './components/Product';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {useState} from 'react';

const products = [
  {
    name: 'Frosted Flakes',
    price: 2.99
  },
  {
    name: 'Cat Comb',
    price: 8.48
  },
];

const inputTodos = [
  {
    todo: 'pick up dinner',
    completed: false
  },
  {
    todo: 'do the dishes',
    completed: false
  },
];

const App = () => {
  const [todos, setTodos] = useState(inputTodos);

  const addNewTodo = (newTodo) => {
    if (!newTodo) {
      return;
    }

    // create a copy of the todos array
    const copy = [ ...todos ];

    // create a new todo object
    const newTodoObj = {
      todo: newTodo,
      completed: false
    };

    // push in the new todo
    copy.push(newTodoObj);

    // set state with the new array
    setTodos(copy);
  };

  const mappedProducts = products.map((product, index) => {
    return <Product key={index} {...product} />;
  });

  const arrayOfProducts = [
    <Product key="1" name="2% Milk" price={7.99} />,
    <Product key="2" { ...products[0] } />
  ];

  return (
    <div className="App">
      <h2>M07W17 - Component-Based UI w/ React</h2>
      {/* <Product name={product.name} price={product.price} /> */}

      {/* { mappedProducts } */}

      {/* { arrayOfProducts } */}

      <TodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
