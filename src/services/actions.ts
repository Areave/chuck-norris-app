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




export {jokeLoaded, setTimeInterval,addJokeToTop, openTopList};
