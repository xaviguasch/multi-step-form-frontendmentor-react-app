import React, { useState, useContext, useEffect } from 'react'
import classes from './FinishingUp.module.css'

import { MultiContext } from '../../context/MultiProvider'

import { PLANS, ADDONS_PRICES } from '../../utils/utils'

const FinishingUp = () => {
  // You need to import the costs via props and display it onscreen
  const { planData, setCurrPage, addOnsGlobal } = useContext(MultiContext)

  let typeOfPlan = ''
  let currPrice = ''
  if (planData.monthlyOrYearly) {
    typeOfPlan = 'mo'
    currPrice = PLANS[planData.plan].price.month
  } else {
    typeOfPlan = 'yr'
    currPrice = PLANS[planData.plan].price.year
  }

  let selectedAddOns = []

  for (const key in addOnsGlobal) {
    if (addOnsGlobal[key]) {
      selectedAddOns.push(key)
    }
  }

  const totalAddons = selectedAddOns.reduce((acc, currV) => {
    return acc + ADDONS_PRICES[currV][typeOfPlan]
  }, 0)

  const finalTotal = totalAddons + currPrice

  return (
    <div className={classes.FinishingUp}>
      <div className='info'>
        <h1 className='title'>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className={classes.cartItems}>
        <div className={classes.items}>
          <div className={classes.item}>
            <div className={classes.itemPair}>
              <span className='text-item-add'>
                {planData.plan[0].toUpperCase() + planData.plan.slice(1)} (
                {planData.monthlyOrYearly ? 'Monthly' : 'Yearly'})
              </span>
              <span className={classes.changeBtn} onClick={() => setCurrPage(2)}>
                Change
              </span>
            </div>
            <span className='text-item-add'>
              ${currPrice}/{typeOfPlan}
            </span>
          </div>

          <hr className={classes.hrLine} />

          {selectedAddOns.map((sel) => {
            return (
              <div key={sel} className={classes.item}>
                <div className={classes.itemInd}>
                  <span className='text-sub-item'>{ADDONS_PRICES[sel].name}</span>
                </div>
                <span className='text-item-num'>
                  ${ADDONS_PRICES[sel][typeOfPlan]}/{typeOfPlan}
                </span>
              </div>
            )
          })}
        </div>

        <div className={classes.total}>
          <div className={classes.item}>
            <div className={classes.itemInd}>
              <span className='text-sub-item'>Total (per month)</span>
            </div>
            <span className='text-item-total'>
              +${finalTotal}/{typeOfPlan}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinishingUp
