import {useState} from 'react';
import Count from './Count';
// import Button from './Button';
import InBetween from './InBetween';

import CounterContext from './CounterContext';

const Parent = () => {
  const [count, setCount] = useState(0);

  const contextObj = {
    count,
    setCount,
    user: {},
    darkMode: true
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <CounterContext.Provider value={contextObj}>
        <Count />
        <InBetween />
      </CounterContext.Provider>
    </div>
  );
};

export default Parent;
