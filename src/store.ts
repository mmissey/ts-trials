import { Action, createStore } from 'redux';

const initialState = {
  ages: [1,2,3,4,5],
  names: ['bill', 'steve', 'ted'],
}

const reducer = (state = initialState, action: Action) => {
  return state;
};

export const store = createStore(reducer);

