export const deleteOptions = () => ({
  type: 'DELETE_OPTIONS',
});

export const deleteOption = (option) => ({
  type: 'DELETE_OPTION',
  option
});

export const selectOption = (option) => ({
  type: 'SELECT_OPTION',
  option
});

export const addOption = (option) => ({
  type: 'ADD_OPTION',
  option
});

export const clearSelectedOption = () => ({
  type: 'CLEAR_SELECTED_OPTION',
});

export const setOptions = (options) => ({
  type: 'SET_OPTIONS',
  options
});
