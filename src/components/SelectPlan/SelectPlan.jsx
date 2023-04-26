import React, { useState, useContext, useEffect } from 'react'
import classes from './SelectPlan.module.css'

import { MultiContext } from '../../context/MultiProvider'

import PLANS from '../../utils/utils'

const SelectPlan = () => {
  const { planData, setPlanData } = useContext(MultiContext)

  const [plan, setPlan] = useState(planData.plan || 'arcade')
  const [monthlyOrYearly, setMonthlyOrYearly] = useState(
    planData.monthlyOrYearly || 'monthly'
  )

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
        <fieldset>
          <input
            type='radio'
            name='select-plan'
            id='arcade'
            value='arcade'
            checked={plan === 'arcade'}
            onChange={(e) => {
              setPlan(e.target.value)
            }}
          />
          <label htmlFor='arcade'>
            <span>{PLANS.arcade.name}</span>
            <span>{monthlyOrYearly === 'monthly' ? '$9/mo' : '$90/yr'}</span>
            {monthlyOrYearly === 'yearly' && <span>2 months free</span>}
          </label>
          <br />

          <input
            type='radio'
            name='select-plan'
            id='advanced'
            value='advanced'
            checked={plan === 'advanced'}
            onChange={(e) => {
              setPlan(e.target.value)
            }}
          />
          <label htmlFor='advanced'>
            <span>{PLANS.advanced.name}</span>
            <span>{monthlyOrYearly === 'monthly' ? '$12/mo' : '$120/yr'}</span>
            {monthlyOrYearly === 'yearly' && <span>2 months free</span>}
          </label>
          <br />

          <input
            type='radio'
            name='select-plan'
            id='pro'
            value='pro'
            checked={plan === 'pro'}
            onChange={(e) => {
              setPlan(e.target.value)
            }}
          />
          <label htmlFor='pro'>
            <span>{PLANS.pro.name}</span>
            <span>{monthlyOrYearly === 'monthly' ? '$15/mo' : '$150/yr'}</span>
            {monthlyOrYearly === 'yearly' && <span>2 months free</span>}
          </label>
        </fieldset>

        <div>
          <fieldset>
            <legend>Do you agree?</legend>

            <input
              type='radio'
              name='monthly-or-yearly'
              id='monthly-sub'
              value='monthly'
              checked={monthlyOrYearly === 'monthly'}
              onChange={(event) => {
                setMonthlyOrYearly(event.target.value)
              }}
            />
            <label htmlFor='monthly-sub'>Monthly</label>
            <br />

            <input
              type='radio'
              name='monthly-or-yearly'
              id='yearly-sub'
              value='yearly'
              checked={monthlyOrYearly === 'yearly'}
              onChange={(event) => {
                setMonthlyOrYearly(event.target.value)
              }}
            />
            <label htmlFor='yearly-sub'>Yearly</label>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

export default SelectPlan
