import React from 'react'

import classes from './PersonalInfo.module.css'

const PersonalInfo = () => {
  return (
    <div className={classes.PersonalInfo}>
      <div className='info'>
        <h1 className='title'>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <form className={classes.form}>
        <div className='inputGroup'>
          <label className='input-label' htmlFor='name'>
            Name
          </label>
          <input className='input-strd' type='text' id='name' />
        </div>

        <div className='inputGroup'>
          <label className='input-label' htmlFor='email'>
            Email Address
          </label>
          <input className='input-strd' type='email' id='email' />
        </div>

        <div className='inputGroup'>
          <label className='input-label' htmlFor='phone'>
            Phone Number
          </label>
          <input className='input-strd' type='number' id='phone' />
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo
