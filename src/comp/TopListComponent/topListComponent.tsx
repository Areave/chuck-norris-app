import {FC} from 'react';
import {connect} from 'react-redux';
import {Joke, MyState} from '../../services/types';
import TopListItem from './topListItem';
import {TopListContainer} from '../../services/styledComponents';

const TopListComponent = ({topList, deleteJoke}: any) => {
  if (!topList.length) return <h1>no jokes!</h1>;

  const topListArr = topList.map((joke: Joke, index: number) => (
    <TopListItem
      key={index}
      index={index}
      deleteJoke={() => deleteJoke(index)}
      textJoke={joke.value}
    />
  ));

  return <TopListContainer>{topListArr}</TopListContainer>;
};

const mapStateToProps = (state: MyState) => {
  return {
    topList: state.topList,
  };
};

const topListHOC = (View: FC) => (props: any) => {
  return <View {...props} />;
};

export default topListHOC(connect(mapStateToProps)(TopListComponent));
