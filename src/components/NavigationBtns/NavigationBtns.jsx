import React, { useState, useContext } from 'react'

import classes from './NavigationBtns.module.css'

import Button from '../Button/Button'

import { MultiContext } from '../../context/MultiProvider'

const NavigationBtns = ({ onSendDataAndMove, onMoveBack }) => {
  const { currPage, setCurrPage } = useContext(MultiContext)

  const goForwardHandler = () => {
    if (currPage < 4) {
      setCurrPage((prevPage) => prevPage + 1)
    }
  }

  const goBackHandler = () => {
    setCurrPage((prevPage) => prevPage - 1)
  }

  return (
    <div className={classes.NavigationBtns}>
      <div className={classes.buttonsArea}>
        {currPage > 1 && (
          <Button
            onGoBack={goBackHandler}
            text='Go Back'
            type='prevStep'
            currPage={currPage}
          />
        )}
        <Button
          onGoForward={goForwardHandler}
          text='Next Step'
          type='nextStep'
          currPage={currPage}
        />
      </div>
    </div>
  )
}

export default NavigationBtns
