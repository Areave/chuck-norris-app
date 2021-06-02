import {Action, Joke, State} from './types';

const initialState: State = {
  joke: null,
  topList: [],
  isTimer: false,
  loading: true,
  isTopListOpen:false
};

const reducer = (state: State = initialState, action: Action) => {
  // console.log(action)
  // console.log(state)
  switch (action.type as string) {
    case 'OPEN_TOPLIST':
      return {...state, isTopListOpen: !state.isTopListOpen};
    case 'JOKE_LOADED':
      return {...state, joke: action.payload};
    case 'SET_TIMEINTERVAL':
      return {...state, isTimer: !state.isTimer};
    case 'ADD_JOKE':
      let newTopList = [...state.topList];
      const currentJoke = action.payload;
      if (!currentJoke) return state;

      if (state.topList[state.topList.length - 1] === currentJoke) {
        newTopList.pop();
      } else {
        newTopList.push(action.payload);
      }

      localStorage.setItem('topList', JSON.stringify(newTopList));
      return {...state, topList: newTopList};

    default:
      return state;
  }
};

export default reducer;
