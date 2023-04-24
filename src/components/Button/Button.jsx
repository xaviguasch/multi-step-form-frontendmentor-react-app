import React from 'react'

import classes from './Button.module.css'

const Button = ({ text, type = 'nextStep' }) => {
  let typeClass

  if (type === 'nextStep') {
    typeClass = 'nextStep'
  } else if (type === 'prevStep') {
    typeClass = 'prevStep'
  } else if (type === 'confirm') {
    typeClass = 'confirm'
  }

  const btnClickHandler = () => {
    console.log('from the click')
  }

  return (
    <button
      className={`${classes.Button} ${classes[typeClass]}`}
      onClick={btnClickHandler}
    >
      {text}
    </button>
  )
}

export default Button
