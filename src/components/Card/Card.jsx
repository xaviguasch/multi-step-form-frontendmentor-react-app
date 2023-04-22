import React from 'react'
import classes from './Card.module.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import SelectPlan from '../SelectPlan/SelectPlan'
import PickAddOns from '../PickAddOns/PickAddOns'

const Card = () => {
  return (
    <div className={classes.Card}>
      {/* <PersonalInfo /> */}
      <PickAddOns />
    </div>
  )
}

export default Card
