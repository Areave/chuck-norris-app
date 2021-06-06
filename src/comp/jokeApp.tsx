import React from 'react';
import {connect} from 'react-redux';
import {Action, Joke, MyState, ButtonPropsInterface} from '../services/types';
import service from '../services/service'

import {
  jokeLoaded,
  setTimeInterval,
  addJokeToTop,
  openTopList,
  clearTopList,
  deleteJoke
} from '../services/actions';

import {Container} from '../services/styledComponents';
import Title from '../comp/Title/title'
import JokeComponent from './JokeComponent/jokeComponent';
import ButtonsComponent from './ButtonsComponent/buttonsComponent';
import TopListComponent from './TopListComponent/topListComponent';

let interval: any;

const JokeApp: React.FC = (props: any) => {
  const {
    joke,
    isTimer,
    isTopListOpen,
    topList,

    jokeLoaded,
    setTimeInterval,
    addJokeToTop,
    openTopList,
    clearTopList,
    deleteJoke,
  } = props;

  const toggleTopList = () => {
    openTopList();
  };

  const jokeToTop = () => {
    addJokeToTop(joke);
  };

  const loadIntervalJoke = () => {
    if (!isTimer) {
      setTimeInterval();
      interval = setInterval(loadSingleJoke, 1000);
    } else {
      clearInterval(interval);
      setTimeInterval();
    }
  };

  const loadSingleJoke = () => {
    service.getRandomJoke().then((res: any) => {
      jokeLoaded(res);
    });
  }; 

  const createButtonProps = (onClick: (joke?: Joke | undefined) => void, label: string) => {
    return {onClick, label};
  };

  const propsAr: ButtonPropsInterface[] = [
    createButtonProps(loadSingleJoke, 'Random Joke'),
    createButtonProps(loadIntervalJoke, 'Interval'),
    createButtonProps(jokeToTop, 'Add to Top'),
    createButtonProps(toggleTopList, isTopListOpen ? 'Close Top List' : 'Open Top List' ),
    createButtonProps(clearTopList, 'Clear Top List'),
  ];

  const jokeText: string = joke ? joke.value : 'push the button for joke!';

  // console.log(joke)

  return (
    <Container>
      <Title/>
      <JokeComponent joke={jokeText} />
      <ButtonsComponent propsAr={propsAr} />
      {isTopListOpen && <TopListComponent deleteJoke={deleteJoke} topList={topList} />}
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    jokeLoaded: (joke: Joke) => {
      dispatch(jokeLoaded(joke) as Action);
    },

    setTimeInterval: () => {
      dispatch(setTimeInterval());
    },

    addJokeToTop: (joke: Joke) => {
      dispatch(addJokeToTop(joke) as Action);
    },

    openTopList: () => {
      dispatch(openTopList() as Action);
    },

    clearTopList: () => {
      dispatch(clearTopList() as Action)
    },

    deleteJoke: (index:number) => {
      dispatch(deleteJoke(index) as Action)
    }

  };
};

const mapStateToProps = (state: MyState) => {
  return state;
};


// const jokeAppHOC = () => {

// }

export default connect(mapStateToProps, mapDispatchToProps)(JokeApp);
