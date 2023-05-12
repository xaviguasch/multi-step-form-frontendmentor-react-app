import React, { useState, useContext } from 'react'

import classes from './NavigationBtns.module.css'

import Button from '../Button/Button'

import { MultiContext } from '../../context/MultiProvider'

const NavigationBtns = () => {
  const { currPage, setCurrPage, personalInfoData } = useContext(MultiContext)
  const [isFWDBtnDisabled, setIsFWDBtnDisabled] = useState(false)

  const { name, email, phoneNumber } = personalInfoData

  const goForwardHandler = () => {
    if (currPage === 1) {
      if (name.length === 0 || email.length === 0 || phoneNumber.length === 0) {
        setIsFWDBtnDisabled(true)
      } else {
        setIsFWDBtnDisabled(false)
      }
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
