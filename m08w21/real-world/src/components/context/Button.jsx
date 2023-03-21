import CounterContext from "./CounterContext";
import {useContext} from 'react';

const Button = () => {
  const {setCount} = useContext(CounterContext);

  const clickHandler = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default Button;
