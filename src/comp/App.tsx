import React from 'react';
import JokeComp from './joke';
import Button from './button';
import {Provider} from 'react-redux';
import store from '../services/store'

const App = () => {
  return (
  <Provider store={store}>
    <JokeComp />
    <Button />
  </Provider>
  )
};

export default App;
