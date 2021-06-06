import {JokeImgStyled} from '../../services/styledComponents';

const url = `./chuckIMG/${Math.floor(Math.random()*4)}.jpg`

const JokeImg = () => {
  return <JokeImgStyled url={url}/>;
};

export default JokeImg;
