import React, { useState, useContext } from 'react'

import classes from './NavigationBtns.module.css'

import Button from '../Button/Button'

import { MultiContext } from '../../context/MultiProvider'

const NavigationBtns = () => {
  const { currPage, setCurrPage } = useContext(MultiContext)

  const goForwardHandler = () => {
    if (currPage === 1) {
      console.log('apply form validation for Personal info')
    }

    if (currPage < 5) {
      setCurrPage((prevPage) => prevPage + 1)
    }
  }

  const goBackHandler = () => {
    setCurrPage((prevPage) => prevPage - 1)
  }

  if (currPage === 5) {
    return null
  }

  return (
    <div className={classes.NavigationBtns}>
      <div className={classes.buttonsArea}>
        {currPage > 1 && currPage < 5 && (
          <Button
            onGoBack={goBackHandler}
            text='Go Back'
            type='prevStep'
            currPage={currPage}
          />
        )}

        {currPage >= 1 && currPage < 4 && (
          <Button
            onGoForward={goForwardHandler}
            text='Next Step'
            type='nextStep'
            currPage={currPage}
          />
        )}

        {currPage === 4 && (
          <Button
            onGoForward={goForwardHandler}
            text='Confirm'
            type='nextStep'
            currPage={currPage}
          />
        )}
      </div>
    </div>
  )
}

export default NavigationBtns
