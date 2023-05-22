import React from 'react'

const Button = (props) => {
  return (
    <div><button className={props.mybutton}>{props.children}</button></div>
  )
}

export default Button;