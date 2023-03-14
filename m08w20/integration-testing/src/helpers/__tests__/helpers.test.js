import { announceResult, chooseRobotItem } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

// choose an item for the robot player (after the player has chosen something)
// cheating: boolean
// playerChoice: string
// return value: 'Moai', 'Axe', 'Tree'
describe('chooseRobotItem function', () => {

  test('returns the winning option if cheating is true', () => {
    const cheating = true;
    const playerSelection = 'Axe';

    const actual = chooseRobotItem(playerSelection, cheating);
    const expected = 'Moai';

    expect(actual).toBe(expected); // assert.equal(actual, expected)
  });

  test('returns a valid option if cheating is false', () => {
    const cheating = false;
    const playerSelection = 'Moai';

    const actual = chooseRobotItem(playerSelection, cheating);
    // const expected = 'Axe'; // ???

    const options = ['Moai', 'Axe', 'Tree'];
    // expect(options.includes(actual)).toBe(true);

    expect(options).toContain(actual);
  });

});
