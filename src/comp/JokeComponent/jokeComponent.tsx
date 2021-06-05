import {JokeContainer, JokeTextStyled} from '../../services/styledComponents';
import JokeImg from './jokeImg'



const JokeComponent = (props: any) => {

  const url = '../../chuckIMG/1.jpg'

  return (
    <JokeContainer>
      <JokeImg url={url}/>
      {/* <JokeImageStyled url={}/> */}
      <JokeTextStyled joke={props.joke}/>
    </JokeContainer>
  );
};

export default JokeComponent;
