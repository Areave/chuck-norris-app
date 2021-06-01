import React from 'react';
import {connect} from 'react-redux';
import {Action, Joke, State} from '../services/types';
import Button from './button';
import ConsumerWrapper from '../services/consumerWrapper';
import {jokeLoaded, setTimeInterval, addJokeToTop} from '../services/actions';
import TopList from './topList';

let interval: any;

const JokeComp: React.FC = (props: any) => {
  const {
    joke,
    isTimer,
    jokeLoaded,
    setTimeInterval,
    addJokeToTop,
    service,
  } = props;


  const openTopList = () => {
    addJokeToTop(joke);
  };

  const openTopListToProps = {
    onClick: openTopList,
    label: 'open top list',
  };



  const jokeToTop = () => {
    addJokeToTop(joke);
  };

  const getJokeToTopProps = {
    onClick: jokeToTop,
    label: 'put joke to top list',
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

  const getIntervalJokeProps = {
    onClick: loadIntervalJoke,
    label: 'set interval',
  };

  const loadSingleJoke = () => {
    service.getRandomJoke().then((res: any) => {
      jokeLoaded(res);
    });
  };

  const getSingleJokeProps = {
    onClick: loadSingleJoke,
    label: 'load Single joke',
  };

  const jokeText: string = joke ? joke.value : 'push the button for joke!';

  return (
    <>
      <h1>{jokeText}</h1>
      <Button {...getSingleJokeProps} />
      <Button {...getIntervalJokeProps} />
      <Button {...getJokeToTopProps} />
      <Button {...openTopListToProps} />
      <TopList />
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
  return {
    joke: state.joke as Joke,
    isTimer: state.isTimer,
    topList: state.topList,
  };
};

export default ConsumerWrapper()(
  connect(mapStateToProps, mapDispatchToProps)(JokeComp)
);
