import {useState} from 'react';

const Form = () => {
  const arr = useState('');
  const username = arr[0];
  const setUsername = arr[1];

  const onChangeHandler = (event) => {
    console.log('change handler has fired!');
    setUsername(event.target.value);
  };

  return (
    <div>
      <h2>Sign in below!</h2>
      <div>
        <label>Username</label>
        <input 
          value={username}
          onChange={onChangeHandler}
        />
        <h2>Username: {username}</h2>
      </div>
    </div>
  );
};

export default Form;
