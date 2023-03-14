import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('tests for the Game component', () => {

  test('can toggle the cheating state by clicking on robot-head icon', () => {
    const { getByTestId, container, debug } = render(<Game />);
    // debug();

    const robotHeadIcon = getByTestId('robot-head-icon');

    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).toHaveClass('cheating');
    
    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

  test('creating fake functions with jest', () => {
    const fakeFunction = jest.fn();

    fakeFunction('hello world');
    // render(<Button onClick={fakeFunction} />);

    expect(fakeFunction).toHaveBeenCalled();
    expect(fakeFunction).toHaveBeenCalledTimes(1);
    expect(fakeFunction).toHaveBeenCalledWith('hello world');

    // const get = jest.fn((url) => {
    //   if (url === '/api/appointments') {
    //     // return a promise that resolves to fake/hardcoded appointment data
    //   }
    // })
  });

});