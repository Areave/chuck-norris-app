import React from 'react';
import JokeApp from './jokeApp'
import ErrorBoundary from './errorBoundary';
import {Provider} from 'react-redux';
import store from '../services/store';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
            <JokeApp />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
