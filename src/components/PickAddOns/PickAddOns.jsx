import React, { useState } from 'react'
import classes from './PickAddOns.module.css'

const initialAddOns = {
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
}

const PickAddOns = () => {
  // needs to get props specifying if the subscription is yearly or monthly
  const [addOns, setAddOns] = React.useState(initialAddOns)

  const addOnsList = Object.keys(initialAddOns)

  return (
    <div className={classes.PickAddOns}>
      <div className='info'>
        <h1 className='title'>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <form className={classes.form}>
        <fieldset>
          <legend>Select toppings:</legend>

          {addOnsList.map((option) => (
            <div key={option}>
              <input
                type='checkbox'
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
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </fieldset>
      </form>
    </div>
  )
}

export default PickAddOns
