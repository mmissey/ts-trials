import { Action, createStore } from 'redux';

const reducer = (state = ['bill', 'steve', 'ted'], action: Action) => {
  return state;
};

export const store = createStore(reducer);

