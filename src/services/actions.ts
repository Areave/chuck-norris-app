import {Joke} from './types';

const jokeLoaded = (joke: Joke) => ({
  type: 'JOKE_LOADED',
  payload: joke,
});

const setTimeInterval = () => ({
  type: 'SET_TIMEINTERVAL',
});

const addJokeToTop = (joke:Joke) => ({
  type: 'ADD_JOKE',
  payload:joke
});

const openTopList = () => ({
  type: 'OPEN_TOPLIST'
});

const clearTopList = () => ({
  type: 'CLEAR_TOPLIST'
});

const deleteJoke = (index:number) => ({
  type: 'DELETE_JOKE',
  index:index

});




export {jokeLoaded, setTimeInterval,addJokeToTop, openTopList, clearTopList, deleteJoke};
