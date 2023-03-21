import {useRef, useState} from 'react';

const RefDemo = () => {
  const inputRef = useRef();
  
  const [count, setCount] = useState(0);
  const countRef = useRef();

  countRef.current = count;

  const clickHandler = () => {
    inputRef.current.focus();
  };

  const showAlert = () => {
    setTimeout(() => {
      alert(`the current count is ${countRef.current}`);
    }, 2000);
  };

  return (
    <div>
      <h2>Reference Demo</h2>
      <label>Search Term:</label>
      <input ref={inputRef} />
      <button onClick={clickHandler}>Set Focus!!</button>

      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={showAlert}>Show Alert</button>
      </div>
    </div>
  );
};

export default RefDemo;
