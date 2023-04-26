import React, { useState, useContext, useEffect } from 'react'

import classes from './PersonalInfo.module.css'

import { MultiContext } from '../../context/MultiProvider'

const PersonalInfo = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const { setPersonalInfoData } = useContext(MultiContext)

  useEffect(() => {
    // It sends the form data whenever the component gets unmounted
    return () => {
      setPersonalInfoData({
        name,
        email,
        phoneNumber,
      })
    }
  }, [name, email, phoneNumber])

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
          <input
            className='input-strd'
            type='text'
            id='name'
            placeholder='e.g. Stephen King'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='inputGroup'>
          <label className='input-label' htmlFor='email'>
            Email Address
          </label>
          <input
            className='input-strd'
            type='email'
            id='email'
            placeholder='e.g. stephenking@lorem.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='inputGroup'>
          <label className='input-label' htmlFor='phone'>
            Phone Number
          </label>
          <input
            className='input-strd'
            type='text'
            id='phone'
            placeholder='e.g. +1 234 567 890'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo
