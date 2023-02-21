import React from 'react';

import Button from './Button';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button Component', module) // describe()
  .add('can render to the screen', () => { // it()
    return <Button></Button>;
  })
  .add('can show children as the label', () => {
    return <Button>Register</Button>;
  })
  .add('can be clicked on', () => {
    return <Button onClick={() => console.log('button clicked!')}>Login</Button>;
  })
  .add('can be clicked on using the action function', () => {
    return <Button onClick={action('does this work???')}>Logout</Button>;
  })
  .add('can display as green if argument passed in', () => {
    return <Button onClick={action('click')} color="green">More Info</Button>;
  });
