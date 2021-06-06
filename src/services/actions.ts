import {Joke,ActionCreator} from './types';

const jokeLoaded:ActionCreator = (joke: Joke) => ({
  type: 'JOKE_LOADED',
  payload: joke,
});

const setTimeInterval:ActionCreator = () => ({
  type: 'SET_TIMEINTERVAL',
});

const addJokeToTop:ActionCreator = (joke:Joke) => ({
  type: 'ADD_JOKE',
  payload:joke
});

const openTopList:ActionCreator = () => ({
  type: 'OPEN_TOPLIST'
});

const clearTopList:ActionCreator = () => ({
  type: 'CLEAR_TOPLIST'
});

const deleteJoke:ActionCreator = (index:number) => ({
  type: 'DELETE_JOKE',
  index:index

});




export {jokeLoaded, setTimeInterval,addJokeToTop, openTopList, clearTopList, deleteJoke};
