import React from 'react';
import JokeComp from './jokeComp';
import Button from './button';
import {Provider} from 'react-redux';
import store from '../services/store';
import service from '../services/service';
import Context from '../services/context';
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <Context.Provider value={service}>
        <Router>
          <JokeComp />
        </Router>
      </Context.Provider>
    </Provider>
  );
};

export default App;
