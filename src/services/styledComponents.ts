import styled from 'styled-components';
import JokeText from '../comp/JokeComponent/jokeText';

const Container = styled.div`
  max-width: 800px;
  padding: 50px 0;
  margin: 0 auto;
`;

const TitleStyled = styled.div`
  font-size: 40px;
  text-align: center;
  padding-bottom: 15px;
`;

const JokeContainer = styled.div`
display:flex;
  width: 100%;
  min-height: 200px;
  padding: 10px;
`;

const JokeTextStyled = styled(JokeText)`
  font-size: 30px;
  padding-left: 25px;
`;

const JokeImgStyled = styled.div<{url: string}>`
${props=>props.url && `
flex: 0 0 200px;
background: center / cover no-repeat url(${props.url});
width:200px;
height: 200px;
`}
`;

const ButtonsContainer = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 5px;
  font-size: 18px;
  flex-grow: 1;
  margin: 0 10px;
  background: #daa520;

  &: hover {
    background: #b8860b;
  }
`;

const TopListContainer = styled.div`
  padding: 10px 0;
  background: #d2691e;
  box-shadow: 1px 10px 26px 10px rgba(34, 60, 80, 0.25);
`;

const TopListItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin: 0 10px 10px;
  padding: 15px;
  background: white;
  font-size: 18px;
  font-style: italic;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TopListNumberStyled = styled.div`
  flex: 0 0 60px;

  padding: 15px;
  padding-top: 0;

  font-size: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TopListTextStyled = styled.div`
  flex: 0 0 70%;
  padding: 0 20px;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TopListButtonStyled = styled.button`
  cursor: pointer;
  // max-width: 10%;
  // min-width: 10%;
  flex: 0 0 100px;

  width: 100px;

  // flex-basis:100px;

  height: 50px;
  padding: 5px;
  font-size: 18px;
  flex-grow: 1;
  margin: 0 10px;
  background: #daa520;

  &: hover {
    background: #b8860b;
  }
`;

export {
  Container,
  TitleStyled,
  JokeContainer,
  JokeTextStyled,
  JokeImgStyled,
  ButtonsContainer,
  ButtonStyled,
  TopListContainer,
  TopListItemStyled,
  TopListButtonStyled,
  TopListNumberStyled,
  TopListTextStyled,
};
