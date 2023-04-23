import React from 'react'
import classes from './Card.module.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import SelectPlan from '../SelectPlan/SelectPlan'
import PickAddOns from '../PickAddOns/PickAddOns'
import FinishingUp from '../FinishingUp/FinishingUp'
import ThankYou from '../ThankYou/ThankYou'

const Card = () => {
  return (
    <div className={classes.Card}>
      {/* <PersonalInfo /> */}
      <ThankYou />
    </div>
  )
}

export default Card
