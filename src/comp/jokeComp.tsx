import React from 'react';
import {connect} from 'react-redux';
import {Action, Joke, State} from '../services/types';
import Button from './button';
import ConsumerWrapper from '../services/consumerWrapper';
import {jokeLoaded, setTimeInterval, addJokeToTop} from '../services/actions';
import TopList from './topList';

let interval: any;
let isTopListOpen = false;

const JokeComp: React.FC = (props: any) => {
  const {
    joke,
    isTimer,
    isTopListOpen,
    jokeLoaded,
    setTimeInterval,
    addJokeToTop,
    service,
  } = props;

  const toggleTopList = () => {};

  const jokeToTop = () => {
    addJokeToTop(joke);
  };

  const loadIntervalJoke = () => {
    if (!isTimer) {
      setTimeInterval();
      interval = setInterval(loadSingleJoke, 1000);
    } else {
      clearInterval(interval);
      setTimeInterval();
    }
  };

  const loadSingleJoke = () => {
    service.getRandomJoke().then((res: any) => {
      jokeLoaded(res);
    });
  };

  const jokeText: string = joke ? joke.value : 'push the button for joke!';

  return (
    <>
      <h1>{jokeText}</h1>
      <Button onClick={() => loadSingleJoke()} label={'load Single joke'} />
      <Button onClick={() => loadIntervalJoke()} label={'set interval'} />
      <Button onClick={() => jokeToTop()} label={'put joke to top list'} />
      <Button onClick={() => toggleTopList()} label={'open top list'} />
      {isTopListOpen && <TopList />}
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    jokeLoaded: (joke: Joke) => {
      dispatch(jokeLoaded(joke) as Action);
    },

    setTimeInterval: () => {
      dispatch(setTimeInterval());
    },

    addJokeToTop: (joke: Joke) => {
      dispatch(addJokeToTop(joke) as Action);
    },
  };
};

const mapStateToProps = (state: State) => {
  return state;
};

export default ConsumerWrapper()(
  connect(mapStateToProps, mapDispatchToProps)(JokeComp)
);
