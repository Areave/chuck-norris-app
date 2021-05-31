import {Action, State} from './types';

const initialState: State = {
  joke: null,
  topList: [],
  isTimer: false,
  loading: true,
};

const reducer = (state: State = initialState, action: Action) => {
  console.log(action)
  console.log(state)
  switch (action.type as string) {
    case 'JOKE_LOADED':
      return {...state, joke:action.payload};
    default:
      return state;
  }
};

export default reducer;
