import React, { useContext } from 'react'
import classes from './Card.module.css'

import { MultiContext } from '../../context/MultiProvider'

import PersonalInfo from '../PersonalInfo/PersonalInfo'
import SelectPlan from '../SelectPlan/SelectPlan'
import PickAddOns from '../PickAddOns/PickAddOns'
import FinishingUp from '../FinishingUp/FinishingUp'
import ThankYou from '../ThankYou/ThankYou'

const Card = () => {
  const { currPage } = useContext(MultiContext)

  let currentCard

  if (currPage === 1) {
    currentCard = <PersonalInfo />
  } else if (currPage === 2) {
    currentCard = <SelectPlan />
  } else if (currPage === 3) {
    currentCard = <PickAddOns />
  } else if (currPage === 4) {
    currentCard = <FinishingUp />
  }

  return (
    <div className={classes.Card}>
      {/* <ThankYou /> */}
      {currentCard}
    </div>
  )
}

export default Card
