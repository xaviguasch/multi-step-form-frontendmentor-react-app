import React, { useState, useContext, useEffect } from 'react'
import classes from './PickAddOns.module.css'

import { MultiContext } from '../../context/MultiProvider'

import { PLANS, ADDONS_PRICES } from '../../utils/utils'

const PickAddOns = () => {
  const { addOnsGlobal, setAddOnsGlobal, planData } = useContext(MultiContext)

  console.log(addOnsGlobal)

  // Is this state redundant????? Test if we could get rid of the internal addOns state
  const [addOns, setAddOns] = React.useState(addOnsGlobal)

  let typeOfPlan = ''
  if (planData.monthlyOrYearly === 'monthly') {
    typeOfPlan = 'mo'
  } else {
    typeOfPlan = 'yr'
  }

  const addOnsList = Object.keys(addOnsGlobal)

  useEffect(() => {
    setAddOnsGlobal({
      ...addOns,
    })
  }, [addOns])

  return (
    <div className={classes.PickAddOns}>
      <div className='info'>
        <h1 className='title'>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <form className={classes.form}>
        {addOnsList.map((option) => (
          <div
            key={option}
            className={`${classes.addOns} ${
              addOns[option] === true && classes.activeAddOnGroup
            }`}
          >
            <label htmlFor={option} className={classes.labelAddOn}>
              <div className={classes.addOnGroup}>
                <div className={classes.leftAddOn}>
                  <input
                    type='checkbox'
                    className={classes.customCheckbox}
                    id={option}
                    value={option}
                    checked={addOns[option] === true}
                    onChange={(event) => {
                      setAddOns({
                        ...addOns,
                        [option]: event.target.checked,
                      })
                    }}
                  />
                  <div className={classes.addOnInfo}>
                    <span className='text-item-add'>{ADDONS_PRICES[option].name}</span>
                    <span className='text-sub-sub-item-add'>
                      {ADDONS_PRICES[option].copy}
                    </span>
                  </div>
                </div>
                <span className='text-sub-sub-item-price'>
                  ${ADDONS_PRICES[option][typeOfPlan]}/{typeOfPlan}
                </span>
              </div>
            </label>
          </div>
        ))}
      </form>
    </div>
  )
}

export default PickAddOns
