import React from 'react'

import classes from './NavigationBtns.module.css'

import Button from '../Button/Button'

const NavigationBtns = () => {
  return (
    <div className={classes.NavigationBtns}>
      <div className={classes.buttonsArea}>
        <Button text='Go Back' />
        <Button text='Next Step' />
      </div>
    </div>
  )
}

export default NavigationBtns
