import options from '../fixtures/options';
import optionsReducer from '../../reducers/options';

// deleteOptions,
// deleteOption,
// pickOption,
// addOption,
// clearSelectedOption,
// setOptions

test ('should set default state', () => {
  const state = optionsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    options: [],
    error: undefined,
    selectedOptions: undefined
  });
});

test('should perform delete options', () => {
  const action = {
    type: 'DELETE_OPTIONS'
  };
  const state = optionsReducer({ options }, action);
  expect(state).toEqual({
    options: [],
    error: undefined
  });
});

test('should perform delete option', () => {
  const action = {
    type: 'DELETE_OPTION',
    option: options[1]
  };
  const state = optionsReducer({ options }, action);
  expect(state).toEqual({
    options: [options[0], options[2]],
    error: undefined
  });
});

test('should perform select option', () => {
  const selectedOption = "abcde12345";
  const action = {
    type: 'SELECT_OPTION',
    option: selectedOption
  };
  const state = optionsReducer({ selectedOption: undefined }, action);
  expect(state).toEqual({
    selectedOption,
    error: undefined
  });
});

test('should perform add option', () => {
  const option = options[2];
  const action = {
    type: 'ADD_OPTION',
    option
  };
  const state = optionsReducer({ options: [] }, action);
  expect(state).toEqual({
    options: [option],
    error: undefined
  });
});

test('should perform clear selected option', () => {
  const selectedOption = "abcde12345";
  const action = {
    type: 'CLEAR_SELECTED_OPTION',
    option: selectedOption
  };
  const state = optionsReducer({ selectedOption }, action);
  expect(state).toEqual({
    selectedOption: undefined,
    error: undefined
  });
});

test('should perform set options', () => {
  const action = {
    type: 'SET_OPTIONS',
    options
  };
  const state = optionsReducer({ options: [] }, action);
  expect(state).toEqual({
    options,
    error: undefined
  });
});
