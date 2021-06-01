import React from 'react';
// import {connect} from 'react-redux';
// import {Joke, State} from '../services/types';
// import {jokeLoaded} from '../services/actions';

const Button: React.FC<any> = ({onClick, label}: any) => {
  // console.log(props);



  return <button onClick={() => onClick()}>{label}</button>;
};

// const mapStateToProps = (state: State) => {
//   return {
//     joke: state.joke,
//   };
// };



export default Button;
