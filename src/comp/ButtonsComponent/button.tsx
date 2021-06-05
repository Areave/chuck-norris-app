import React from 'react';
import {ButtonPropsInterface} from '../../services/types';
import {ButtonStyled} from '../../services/styledComponents'
// import {connect} from 'react-redux';
// import {Joke, State} from '../services/types';
// import {jokeLoaded} from '../services/actions';

const Button: React.FC<ButtonPropsInterface> = ({onClick, label}) => {
  return <ButtonStyled onClick={() => onClick()}>{label}</ButtonStyled>;
};

export default Button;
