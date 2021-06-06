import React from 'react'
import Button from './button'
import renderer from 'react-test-renderer'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})



describe('render <Button>', ()=> {

  it('<Button> rendered correctly', ()=> {
    const button = shallow(<Button label={'label'} onClick={()=>console.log('click!')}/>);
    expect(button).toMatchSnapshot()
  })
})


// describe('render <Button>', ()=> {

//   it('<Button> rendered correctly', ()=> {
//     const button = renderer.create(<Button label={'label'} onClick={()=>console.log('click!')}/>).toJSON();
//     expect(button).toMatchSnapshot()
//   })
// })