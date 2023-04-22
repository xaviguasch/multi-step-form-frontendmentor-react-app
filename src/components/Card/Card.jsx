import React from 'react'
import classes from './Card.module.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import SelectPlan from '../SelectPlan/SelectPlan'

const Card = () => {
  return (
    <div className={classes.Card}>
      {/* <PersonalInfo /> */}
      <SelectPlan />
    </div>
  )
}

export default Card
