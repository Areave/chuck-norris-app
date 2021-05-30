import axios from 'axios';
import React, {useState, useEffect} from 'react';


const JokeComp: React.FC = () => {
  const apiURL = 'https://api.chucknorris.io/jokes/random';

  type Joke = {
    icon_url: string;
    id: string;
    url: string;
    value: string;
  };

  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  const loadJoke = async (url: string) => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setJoke(res.data);
    });
  };

  useEffect(() => {
    loadJoke(apiURL);
  }, []);

  const jokeText = joke ? joke.value : '234';

  // console.log(Object.keys(joke));

  return <h1>{jokeText}</h1>;
};

export default JokeComp;
