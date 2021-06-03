import {Action, Joke, MyReducer, MyState} from './types';
import React from 'react';

const initialState: MyState = {
  joke: null,
  topList: localStorage.topList ? JSON.parse(localStorage.topList) : [],
  isTimer: false,
  loading: true,
  isTopListOpen: false,
};

const reducer = (state: any = initialState, action: Action) => {
  // console.log(action)
  // console.log(state)
  switch (action.type as string) {
    case 'OPEN_TOPLIST':
      return {...state, isTopListOpen: !state.isTopListOpen};

    case 'CLEAR_TOPLIST':
      localStorage.removeItem('topList');
      return {...state, topList: []};

    case 'DELETE_JOKE':
      const index = action.index;
      const tempTopList = [...state.topList];
      console.log(index)
      const newTopList =
        index === tempTopList.length - 1
          ? tempTopList.slice(0, index)
          : [...tempTopList.slice(0, index), tempTopList.slice(index)];
      if (!newTopList.length) localStorage.removeItem('topList');
      else localStorage.setItem('topList', JSON.stringify(newTopList));
      return {...state, topList: newTopList};

    case 'JOKE_LOADED':
      return {...state, joke: action.payload};

    case 'SET_TIMEINTERVAL':
      return {...state, isTimer: !state.isTimer};

    case 'ADD_JOKE':
      let newTopList2 = [...state.topList];
      const currentJoke = action.payload;
      if (!currentJoke) return state;
      if (state.topList[state.topList.length - 1] === currentJoke) {
        newTopList2.pop();
      } else {
        newTopList2.push(currentJoke);
      }
      localStorage.setItem('topList', JSON.stringify(newTopList2));
      return {...state, topList: newTopList2};

    default:
      return state;
  }
};

export default reducer;
