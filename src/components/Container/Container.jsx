import React, { useState } from 'react'

import classes from './Container.module.css'

import Card from '../Card/Card'
import StepsArea from '../StepsArea/StepsArea'
import NavigationBtns from '../NavigationBtns/NavigationBtns'

const Container = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.stepsWrapper}>
        <StepsArea />
      </div>
      <div className={classes.cardContainer}>
        <Card />
      </div>
      <div className={classes.navigationBtnsWrapper}>
        <NavigationBtns />
      </div>
    </div>
  )
}

export default Container
