import React, { useContext } from 'react'
import classes from './StepsArea.module.css'

import { MultiContext } from '../../context/MultiProvider'

const StepsArea = () => {
  return (
    <div className={classes.StepsArea}>
      <ul className={classes.stepsList}>
        <li>
          <div className={classes.stepItem}>
            <span className={`${classes.number} ${classes.numSelected}`}>1</span>
            <div className={classes.stepGroup}>
              <span className={classes.stepOrder}>Step 1</span>
              <h2 className={classes.stepName}>Your Info</h2>
            </div>
          </div>
        </li>

        <li>
          <div className={classes.stepItem}>
            <span className={classes.number}>2</span>
            <div className={classes.stepGroup}>
              <span className={classes.stepOrder}>Step 2</span>
              <h2 className={classes.stepName}>Your Info</h2>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.stepItem}>
            <span className={classes.number}>3</span>
            <div className={classes.stepGroup}>
              <span className={classes.stepOrder}>Step 3</span>
              <h2 className={classes.stepName}>Your Info</h2>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.stepItem}>
            <span className={classes.number}>4</span>
            <div className={classes.stepGroup}>
              <span className={classes.stepOrder}>Step 4</span>
              <h2 className={classes.stepName}>Your Info</h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default StepsArea
