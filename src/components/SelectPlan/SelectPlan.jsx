import React, { useState } from 'react'
import classes from './SelectPlan.module.css'

const SelectPlan = () => {
  const [plan, setPlan] = useState('arcade')
  const [monthlyOrYearly, setMonthlyOrYearly] = useState('monthly')

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
          <label htmlFor='arcade'>Arcade</label>
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
          <label htmlFor='advanced'>Advanced</label>
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
          <label htmlFor='pro'>Pro</label>
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
