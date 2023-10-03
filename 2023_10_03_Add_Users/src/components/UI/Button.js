import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  return (
    <div>
      <button type={props.type || 'submit'} onClick={props.onClick}>{props.data}</button>
    </div>
  )
}

export default Button
