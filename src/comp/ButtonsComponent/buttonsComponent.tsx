import {ButtonsContainer} from '../../services/styledComponents'
import {ButtonPropsInterface} from '../../services/types'
import Button from './button'

const ButtonsComponent:React.FC<{propsAr:ButtonPropsInterface[]}> = ({propsAr}) => {


  return <ButtonsContainer>
    {/* <h1>buttons</h1> */}
    {propsAr.map((props, index:number) => <Button key={index} {...props} />)}
  </ButtonsContainer>
};

export default ButtonsComponent;
