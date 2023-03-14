import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('can display information from an api call', () => {
  const { findByText, getByTestId } = render(<Result status="Waiting" />);

  const highscoreButton = getByTestId('high-scores');

  fireEvent.click(highscoreButton);

  return findByText('Bob', { exact: false });
});
