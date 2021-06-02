import React from 'react';
import {ButtonPropsInterface} from '../services/types';
// import {connect} from 'react-redux';
// import {Joke, State} from '../services/types';
// import {jokeLoaded} from '../services/actions';

const Button: React.FC<ButtonPropsInterface> = ({onClick, label}) => {
  return <button onClick={() => onClick()}>{label}</button>;
};

export default Button;
