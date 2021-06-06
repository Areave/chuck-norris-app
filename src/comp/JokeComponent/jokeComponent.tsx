import {JokeContainer, JokeTextStyled} from '../../services/styledComponents';
import JokeImg from './jokeImg'



const JokeComponent = (props: {joke:string}) => { 

  return (
    <JokeContainer>
      <JokeImg/>
      <JokeTextStyled joke={props.joke}/>
    </JokeContainer>
  );
};

export default JokeComponent;
