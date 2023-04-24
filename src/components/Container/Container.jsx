import React, { useState } from 'react'

import classes from './Container.module.css'

import Card from '../Card/Card'
import StepsArea from '../StepsArea/StepsArea'
import NavigationBtns from '../NavigationBtns/NavigationBtns'

const Container = () => {
  // const [currPage, setCurrPage] = useState(1)

  const sendDataAndMoveHandler = (data) => {
    console.log('moving forward')
  }

  const moveBackHandler = () => {}

  return (
    <div className={classes.Container}>
      <StepsArea />
      <div className={classes.cardContainer}>
        <Card />
      </div>
      <NavigationBtns
        onSendDataAndMove={sendDataAndMoveHandler}
        onMoveBack={moveBackHandler}
      />
    </div>
  )
}

export default Container

// <h1>{currPage}</h1>
// {currPage > 1 && (
//   <button onClick={() => setCurrPage((prevPage) => prevPage - 1)}>Go back</button>
// )}
// <button onClick={() => setCurrPage((prevPage) => prevPage + 1)}>Next step</button>
