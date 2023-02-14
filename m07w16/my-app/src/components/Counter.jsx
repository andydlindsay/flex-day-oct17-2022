import {useState} from 'react';

const Counter = () => {
  // let count = 0; 
  const arr = useState(0);
  const count = arr[0] // getter
  const setCount = arr[1] // setter

  // $button.on('click', () => {});
  // $button.click(() => {});

  const clickHandler = () => {
    // console.log('button clicked!!!');
    // count += 1;
    setCount(count + 1); // set it to 1
    console.log('count', count); // 0
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Current count: {count}</h2>
      <button onClick={clickHandler}>Click me!!</button>
    </div>
  );
};

export default Counter;
