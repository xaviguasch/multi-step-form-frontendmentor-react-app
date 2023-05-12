import React from 'react'

import classes from './Button.module.css'

const Button = ({ text, type = 'nextStep', onGoForward, onGoBack, disabled }) => {
  let typeClass

  if (type === 'nextStep') {
    typeClass = 'nextStep'
  } else if (type === 'prevStep') {
    typeClass = 'prevStep'
  } else if (type === 'confirm') {
    typeClass = 'confirm'
  }

  const btnClickHandler = () => {
    if (type === 'nextStep') {
      onGoForward()
    } else if (type === 'prevStep') {
      onGoBack()
    }
  }

  return (
    <button
      className={`${classes.Button} ${classes[typeClass]}`}
      onClick={btnClickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
