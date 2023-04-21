import React from 'react'
import classes from './Card.module.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'

const Card = () => {
  return (
    <div className={classes.Card}>
      <PersonalInfo />
    </div>
  )
}

export default Card
