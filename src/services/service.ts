import axios from 'axios';

class Service {
  _jokeAPI = 'https://api.chucknorris.io/jokes/random';

  getRandomJoke = async () => {
    const joke = await axios.get(this._jokeAPI);
    return joke.data.value;
  };
}

const service = new Service();
export default service;
