import Context from './context'


const ConsumerWrapper = () => (View:any) => {

  return (props:any) => {

    return (
      <>
      <Context.Consumer>
        { service => <View service={service} {...props}/> }
      </Context.Consumer>
      </>
    )

  }

}

export default ConsumerWrapper






