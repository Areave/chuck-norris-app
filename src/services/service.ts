import axios from 'axios';
import {Joke} from './types';

class Service {
  _jokeAPI = 'https://api.chucknorris.io/jokes/random';

  getRandomJoke = async () => {
    const joke = await axios
      .get(this._jokeAPI)
      .then((joke) => joke.data as Joke)
      .catch((error) => {
        if (error.response) {
          console.log('error.response', error.response);
          throw new Error('my fault');
        } else if (error.request) {
          console.log('error.request', error.request);
        } else {
          return null;
        }
      });
    return joke;
  };
}

const service = new Service();
export default service;
