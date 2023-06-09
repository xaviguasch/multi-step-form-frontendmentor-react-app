import React from 'react'
import classes from './ThankYou.module.css'

// Imported svgs
import { ReactComponent as IconThankYouSVG } from '../../assets/images/icon-thank-you.svg'

const ThankYou = () => {
  return (
    <div className={classes.ThankYou}>
      <IconThankYouSVG className={classes.icon} />
      <div className={classes.copy}>
        <h1 className='title'>Thank you!</h1>
        <p className='text'>
          Thanks for confirming your subscription! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </div>
  )
}

export default ThankYou
