const TopListItem = ({textJoke, deleteJoke, index}: any) => {

  if (textJoke === '') return null;
  return <div>{index}  {textJoke}<button onClick={deleteJoke}>delete</button></div>;
};

export default TopListItem;
