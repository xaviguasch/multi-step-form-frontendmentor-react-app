import React, { useState } from 'react'

import classes from './Container.module.css'

import Card from '../Card/Card'
import StepsArea from '../StepsArea/StepsArea'
import NavigationBtns from '../NavigationBtns/NavigationBtns'

const Container = () => {
  // const [currPage, setCurrPage] = useState(1)

  return (
    <div className={classes.Container}>
      <StepsArea />
      <div className={classes.cardContainer}>
        <Card />
      </div>
      <NavigationBtns />
    </div>
  )
}

export default Container
