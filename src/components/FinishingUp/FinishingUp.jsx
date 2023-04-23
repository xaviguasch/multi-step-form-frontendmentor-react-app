import React from 'react'
import classes from './FinishingUp.module.css'

const FinishingUp = () => {
  // You need to import the costs via props and display it onscreen
  return (
    <div className={classes.FinishingUp}>
      <div className='info'>
        <h1 className='title'>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className={classes.cartItems}>
        <div className={classes.items}>
          <div className={classes.item}>
            <div className={classes.itemPair}>
              <span>Arcade (monthly)</span>
              <p>Change</p>
            </div>
            <span>$9/mo</span>
          </div>
          <br />
          <div className={classes.item}>
            <div className={classes.itemInd}>
              <span>Online service</span>
            </div>
            <span>$1/mo</span>
          </div>
          <div className={classes.item}>
            <div className={classes.itemInd}>
              <span>Online service</span>
            </div>
            <span>$2/mo</span>
          </div>
        </div>

        <div className={classes.total}>
          <div className={classes.item}>
            <div className={classes.itemInd}>
              <span>Total (per month)</span>
            </div>
            <span>+$12/mo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinishingUp
