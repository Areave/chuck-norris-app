import React from 'react';
import JokeComp from './jokeComp';
import ErrorBoundary from './errorBoundary';
import {Provider} from 'react-redux';
import store from '../services/store';
import service from '../services/service';
import Context from '../services/context';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Context.Provider value={service}>
          <Router>
            <JokeComp />
          </Router>
        </Context.Provider>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
