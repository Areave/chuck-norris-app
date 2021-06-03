import {JokeContainer} from '../../services/styledComponents';

const JokeComponent = (props: any) => {
  const {joke} = props;

  return (
    <JokeContainer>
      <h1>{joke}</h1>;
    </JokeContainer>
  );
};

export default JokeComponent;
