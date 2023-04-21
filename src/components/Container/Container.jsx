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
      <Card />
      <NavigationBtns />
    </div>
  )
}

export default Container

// <h1>{currPage}</h1>
// {currPage > 1 && (
//   <button onClick={() => setCurrPage((prevPage) => prevPage - 1)}>Go back</button>
// )}
// <button onClick={() => setCurrPage((prevPage) => prevPage + 1)}>Next step</button>
