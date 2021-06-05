import {
  TopListItemStyled,
  TopListButtonStyled,
  TopListNumberStyled,
  TopListTextStyled,
} from '../../services/styledComponents';

const TopListItem = ({textJoke, deleteJoke, index}: any) => {
  if (textJoke === '') return null;
  return (
    <TopListItemStyled key={index}>
      <TopListNumberStyled>{index + 1}</TopListNumberStyled>
      <TopListTextStyled>{textJoke}</TopListTextStyled>
      <TopListButtonStyled onClick={deleteJoke}>delete</TopListButtonStyled>
    </TopListItemStyled>
  );
};

export default TopListItem;
