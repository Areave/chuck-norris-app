import {ButtonsContainer} from '../../services/styledComponents'
import Button from './button'

const ButtonsComponent = ({propsAr}: any) => {


  return <ButtonsContainer>
    <h1>buttons</h1>
    {propsAr.map((props:any, index:number) => <Button key={index} {...props} />)}
  </ButtonsContainer>

  // <Button onClick={loadSingleJoke} label={'load Single joke'} />
  // <Button onClick={loadIntervalJoke} label={'set interval'} />
  // <Button onClick={jokeToTop} label={'put joke to top list'} />
  // <Button onClick={toggleTopList} label={'open top list'} />
};

export default ButtonsComponent;
