import React from 'react'

import classes from './Button.module.css'

const Button = ({ text }) => {
  return <button className={classes.Button}>{text}</button>
}

export default Button
