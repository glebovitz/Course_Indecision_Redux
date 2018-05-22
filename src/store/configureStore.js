import { createStore, combineReducers } from 'redux';
import optionsReducer from '../reducers/options';

const devToolsExtention = window.__REDUX_DEVTOOLS_EXTENSION__ ;

export default () => {
  const store = createStore(
    combineReducers({
      options: optionsReducer
    }),
    devToolsExtention && devToolsExtension()
  );
  return store;
};
