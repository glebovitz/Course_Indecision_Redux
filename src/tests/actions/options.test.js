import options from '../fixtures/options';
import {
  deleteOptions,
  deleteOption,
  selectOption,
  addOption,
  clearSelectedOption,
  setOptions
} from '../../actions/options';

test('should generate a delete options action', () => {
  const action = deleteOptions();
  expect (action).toEqual({
    type: 'DELETE_OPTIONS',
  });
});

test('should generate a delete option action', () => {
  const action = deleteOption("option");
  expect (action).toEqual({
    type: 'DELETE_OPTION',
    option: "option"
  });
});

test('should generate a pick option action', () => {
  const option = '1234abcd';
  const action = selectOption(option);
  expect (action).toEqual({
    type: 'SELECT_OPTION',
    option
  });
});

test('should generate an add option action', () => {
  const action = addOption("new option");
  expect (action).toEqual({
    type: 'ADD_OPTION',
    option: "new option"
  });
});

test('should generate a clear selected option action', () => {
  const action = clearSelectedOption();
  expect (action).toEqual({
    type: 'CLEAR_SELECTED_OPTION',
  });
});

test('should generate a set options action', () => {
  const action = setOptions(options);
  expect (action).toEqual({
    type: 'SET_OPTIONS',
    options
  });
});
