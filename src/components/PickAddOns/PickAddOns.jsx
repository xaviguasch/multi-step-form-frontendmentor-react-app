import React, { useState, useContext, useEffect } from 'react'
import classes from './PickAddOns.module.css'

import { MultiContext } from '../../context/MultiProvider'

const PickAddOns = () => {
  const { addOnsGlobal, setAddOnsGlobal } = useContext(MultiContext)

  console.log(addOnsGlobal)

  // Is this state redundant????? Test if we could get rid of the internal addOns state
  const [addOns, setAddOns] = React.useState(addOnsGlobal)

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
