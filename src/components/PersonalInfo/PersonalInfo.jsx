import React, { useState, useContext, useEffect, useRef } from 'react'

import classes from './PersonalInfo.module.css'

import { MultiContext } from '../../context/MultiProvider'

const PersonalInfo = () => {
  const { personalInfoData, setPersonalInfoData } = useContext(MultiContext)

  const [name, setName] = useState(personalInfoData.name || '')
  const [email, setEmail] = useState(personalInfoData.email || '')
  const [phoneNumber, setPhoneNumber] = useState(personalInfoData.phoneNumber || '')

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
  })

  const emailInputRef = React.useRef()

  const handleFocus = (e) => {
    setFocused({ ...focused, [e.target.id]: true })
  }

  useEffect(() => {
    // complete email validation via useRef
    console.log('----------')
    console.log(emailInputRef.current.value)
    console.log('----------')

    setPersonalInfoData({
      name,
      email,
      phoneNumber,
    })
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
            onChange={(e) => {
              setName(e.target.value)
            }}
            required
            onBlur={handleFocus}
            onFocus={(e) => setFocused({ ...focused, [e.target.id]: true })}
            focused={focused.name.toString()}
          />
          <span className='error-message'>This field is required</span>
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
            required
            onBlur={handleFocus}
            onFocus={(e) => setFocused({ ...focused, [e.target.id]: true })}
            focused={focused.email.toString()}
            ref={emailInputRef}
          />
          <span className='error-message'>This field is required</span>
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
            required
            onBlur={handleFocus}
            onFocus={(e) => setFocused({ ...focused, [e.target.id]: true })}
            focused={focused.phone.toString()}
          />
          <span className='error-message'>This field is required</span>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo
