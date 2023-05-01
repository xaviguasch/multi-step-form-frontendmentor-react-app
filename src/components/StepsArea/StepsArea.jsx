import React, { useContext } from 'react'
import classes from './StepsArea.module.css'

import { MultiContext } from '../../context/MultiProvider'

const StepsArea = () => {
  const { currPage } = useContext(MultiContext)

  return (
    <div className={classes.StepsArea}>
      <ul className={classes.stepsList}>
        <li>
          <div className={classes.stepItem}>
            <span
              className={`${classes.number} ${currPage === 1 && classes.numSelected}`}
            >
              1
            </span>
            <div className={classes.stepGroup}>
              <span className={classes.stepOrder}>Step 1</span>
              <h2 className={classes.stepName}>Your Info</h2>
            </div>
          </div>
        </li>

        <li>
          <div className={classes.stepItem}>
            <span
              className={`${classes.number} ${currPage === 2 && classes.numSelected}`}
            >
              2
            </span>
            <div className={classes.stepGroup}>
              <span className={classes.stepOrder}>Step 2</span>
              <h2 className={classes.stepName}>Your Info</h2>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.stepItem}>
            <span
              className={`${classes.number} ${currPage === 3 && classes.numSelected}`}
            >
              3
            </span>
            <div className={classes.stepGroup}>
              <span className={classes.stepOrder}>Step 3</span>
              <h2 className={classes.stepName}>Your Info</h2>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.stepItem}>
            <span
              className={`${classes.number} ${
                (currPage === 4 || currPage === 5) && classes.numSelected
              }`}
            >
              4
            </span>{' '}
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
