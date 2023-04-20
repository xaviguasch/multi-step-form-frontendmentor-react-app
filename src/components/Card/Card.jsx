import React from 'react'
import classes from './Card.module.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'

const Card = () => {
  return (
    <div className={classes.Card}>
      <h2>Card</h2>
      <PersonalInfo />
    </div>
  )
}

export default Card
