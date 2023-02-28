import {useEffect, useState} from 'react';

const DocumentTitle = () => {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  // document.title = 'hello world';
  // runs on every render unconditionally
  // runs BEFORE the return

  useEffect(() => {
    // all our side effects
    console.log('setting the document title');
    document.title = `the count is ${count}`;
  }, [count, searchTerm]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      console.log('the interval has fired');
    }, 2000);

    const cleanup = () => {
      // do the cleanup for this effect
      console.log('clearing the interval');
      clearInterval(intervalRef);
    };

    return cleanup;
  }, [count]);

  return (
    <div>
      <h2>Document Title Component</h2>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <label>Search Term:</label>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <h2>Search Term: {searchTerm}</h2>
      </div>
    </div>
  );
};

export default DocumentTitle;
