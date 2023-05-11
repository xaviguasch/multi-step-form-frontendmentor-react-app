import React, { useState, useContext, useEffect } from 'react'
import classes from './SelectPlan.module.css'

import { MultiContext } from '../../context/MultiProvider'

import { PLANS } from '../../utils/utils'

// Imported svgs
import { ReactComponent as IconArcadeSVG } from '../../assets/images/icon-arcade.svg'
import { ReactComponent as IconAdvancedSVG } from '../../assets/images/icon-advanced.svg'
import { ReactComponent as IconProSVG } from '../../assets/images/icon-pro.svg'

const SelectPlan = () => {
  const { planData, setPlanData } = useContext(MultiContext)

  const [plan, setPlan] = useState(planData.plan || 'arcade')
  const [monthlyOrYearly, setMonthlyOrYearly] = useState(planData.monthlyOrYearly ?? true)

  // Consider refactoring state by using local variables and not having local state

  // const { planData, setPlanData } = useContext(MultiContext)
  // const plan = planData.plan || 'arcade';

  // onPlanChange(event){
  //   setPlanData({...planData, plan:event.target.value});
  // }

  useEffect(() => {
    setPlanData({
      plan,
      monthlyOrYearly,
    })
  }, [plan, monthlyOrYearly])

  return (
    <div className={classes.SelectPlan}>
      <div className='info'>
        <h1 className='title'>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <form className={classes.form}>
        <div className={classes.radioFormPlan}>
          <div
            className={`${classes.selectPlanInd} ${
              plan === 'arcade' && classes.activePlan
            }`}
          >
            <label htmlFor='arcade' className={classes.selectLabel}>
              <input
                type='radio'
                className={classes.inputRadioCheckbox}
                name='select-plan'
                id='arcade'
                value='arcade'
                checked={plan === 'arcade'}
                onChange={(e) => {
                  setPlan(e.target.value)
                }}
              />
              <div className={classes.infoPlan}>
                <IconArcadeSVG />
                <div className={classes.spanGroup}>
                  <span className='text-item'>{PLANS.arcade.name}</span>
                  <span className='text-sub-item'>
                    {monthlyOrYearly ? '$9/mo' : '$90/yr'}
                  </span>
                  {!monthlyOrYearly && (
                    <span className='text-sub-sub-item'>2 months free</span>
                  )}
                </div>
              </div>
            </label>
          </div>

          <div
            className={`${classes.selectPlanInd} ${
              plan === 'advanced' && classes.activePlan
            }`}
          >
            <label htmlFor='advanced' className={classes.selectLabel}>
              <input
                type='radio'
                className={classes.inputRadioCheckbox}
                name='select-plan'
                id='advanced'
                value='advanced'
                checked={plan === 'advanced'}
                onChange={(e) => {
                  setPlan(e.target.value)
                }}
              />
              <div className={classes.infoPlan}>
                <IconAdvancedSVG />
                <div className={classes.spanGroup}>
                  <span className='text-item'>{PLANS.advanced.name}</span>
                  <span className='text-sub-item'>
                    {monthlyOrYearly ? '$12/mo' : '$120/yr'}
                  </span>
                  {!monthlyOrYearly && (
                    <span className='text-sub-sub-item'>2 months free</span>
                  )}
                </div>
              </div>
            </label>
          </div>

          <div
            className={`${classes.selectPlanInd} ${plan === 'pro' && classes.activePlan}`}
          >
            <label htmlFor='pro' className={classes.selectLabel}>
              <input
                type='radio'
                className={classes.inputRadioCheckbox}
                name='select-plan'
                id='pro'
                value='pro'
                checked={plan === 'pro'}
                onChange={(e) => {
                  setPlan(e.target.value)
                }}
              />
              <div className={classes.infoPlan}>
                <IconProSVG />

                <div className={classes.spanGroup}>
                  <span className='text-item'>{PLANS.pro.name}</span>
                  <span className='text-sub-item'>
                    {monthlyOrYearly ? '$15/mo' : '$150/yr'}
                  </span>
                  {!monthlyOrYearly && (
                    <span className='text-sub-sub-item'>2 months free</span>
                  )}
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className={classes.radioFormTime}>
          <input
            type='checkbox'
            id='monthly-or-yearly'
            checked={monthlyOrYearly}
            onChange={(event) => {
              setMonthlyOrYearly(event.target.checked)
            }}
          />
          <label htmlFor='monthly-or-yearly'>Monthly</label>
        </div>
      </form>
    </div>
  )
}

export default SelectPlan
