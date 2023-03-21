import CounterContext from "./CounterContext";
import {useContext} from 'react';

const Count = () => {
  const {count} = useContext(CounterContext);

  return (
    <div>
      <h2>Count Component: {count}</h2>
    </div>
  );
};

export default Count;
