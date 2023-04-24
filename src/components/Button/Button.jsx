import React from 'react'

import classes from './Button.module.css'

const Button = ({ text, type = 'prevStep' }) => {
  let typeClass

  if (type === 'nextStep') {
    typeClass = 'nextStep'
  } else if (type === 'prevStep') {
    typeClass = 'prevStep'
  }

  return <button className={`${classes.Button} ${classes[typeClass]}`}>{text}</button>
}

export default Button
