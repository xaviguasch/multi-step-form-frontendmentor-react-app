import React, { useState, useContext, useEffect } from 'react'

import classes from './NavigationBtns.module.css'

import Button from '../Button/Button'

import { MultiContext } from '../../context/MultiProvider'

const NavigationBtns = () => {
  const { currPage, setCurrPage, personalInfoData } = useContext(MultiContext)
  const [isFWDBtnDisabled, setIsFWDBtnDisabled] = useState(true)

  const { name = '', email = '', phoneNumber = '' } = personalInfoData
  console.log({ name, email, phoneNumber })

  useEffect(() => {
    if (currPage === 1) {
      if (name.length === 0 || email.length === 0 || phoneNumber.length === 0) {
        setIsFWDBtnDisabled(true)
      } else {
        setIsFWDBtnDisabled(false)
      }
    }
  }, [name, email, phoneNumber])

  const goForwardHandler = () => {
    if (currPage < 5) {
      setCurrPage((prevPage) => prevPage + 1)
    }
  }

  if (currPage === 1) {
    console.log('test')
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
            disabled={isFWDBtnDisabled}
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
