import {connect} from 'react-redux';
import {Joke, State} from '../services/types';
import TopListItem from './topListItem';

const TopList = ({topList}: any) => {
  // console.log(topList[0]);

  if (!topList.length) return <h1>no jokes!</h1>;

  const topListArr = topList.map((joke: Joke) => (
    <TopListItem key={joke.id} textJoke={joke.value} />
  ));

  return <div>{topListArr}</div>
};

const mapStateToProps = (state: State) => {
  return {
    topList: state.topList,
  };
};

export default connect(mapStateToProps)(TopList);
