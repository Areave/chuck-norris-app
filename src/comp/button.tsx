import React from 'react';
import {connect} from 'react-redux';
import {Joke, State} from '../services/types';
import {jokeLoaded} from '../services/actions';

const Button: React.FC = (props: any) => {
  console.log(props);

  const {getJoke, jokeLoaded} = props;

  console.log(jokeLoaded)

  const loadJoke = () => {
    getJoke().then((res: any) => {
      jokeLoaded(res);
    });
  };

  return <button onClick={() => loadJoke()}>push me</button>;
};

const mapStateToProps = (state: State) => {
  return {
    joke: state.joke,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    jokeLoaded: (joke: Joke) => {
      dispatch(jokeLoaded(joke));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
