const defaultState = {
    options: [],
    selectedOption: undefined,
    error: undefined
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'DELETE_OPTIONS':
      return {
        ...state,
        error: undefined,
        options: []
      };
    case 'DELETE_OPTION':
      return {
        ...state,
        error: undefined,
        options: state.options.filter((option) => action.option !== option)
      };
    case 'PICK_OPTION': {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      return {
        ...state,
        error: undefined,
        selectedOption: option
      };
    };
    case 'ADD_OPTION': {
      const option = action.option;
      if (!option) {
          return {
            ...state,
            error: 'Enter a valid value to add item'
          };
      } else if (state.options.indexOf(action.option) > -1) {
          return {
            ...state,
            error: 'This options already exists'
          };
      } else {
          return {
            ...state,
            error: undefined,
            options: [ ...state.options, option ]
          };
      };
    };
    case 'CLEAR_SELECTED_OPTION':
      return {
        ...state,
        selectedOption: undefined
      };
    case 'SET_OPTIONS':
      return {
        ...state,
        options: action.options
      };
    default:
      return state;
  }
};
