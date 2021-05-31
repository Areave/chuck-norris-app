import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {} from '../services/actions';
import {Joke, State} from '../services/types';
import Button from './button';
import ConsumerWrapper from '../services/consumerWrapper'

const JokeComp: React.FC = (props: any) => {

  // const [joke, setJoke] = useState<Joke | undefined>(undefined);

  // const loadJoke = async (url: string) => {
  //   axios.get(url).then((res) => {
  //     setJoke(res.data);
  //   });
  // };

  // useEffect(() => {
  //   loadJoke(apiURL);
  // }, []);

  // const jokeText = joke ? joke.value : '234';

  console.log(props.service)

  const joke = props.joke ? props.joke.value : 'push the button for joke!';

  const getJokeProps = {
    getJoke:props.service.getRandomJoke
  }

  return (
    <>
      <h1>{joke}</h1>
      <Button {...getJokeProps}/>
    </>
  );
};

const mapStateToProps = (state: State) => {
  return {
    joke: state.joke as Joke,
  };
};

export default ConsumerWrapper()(connect(mapStateToProps)(JokeComp))
