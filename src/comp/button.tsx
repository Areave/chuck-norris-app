import React from 'react'

const Button:React.FC = ()=> {

  const pushMe = () => {
console.log('its me!')
  }

  return <button onClick={pushMe}>push me</button>

}

export default Button