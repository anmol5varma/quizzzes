import PropTypes from "prop-types"
import React from "react"

import { GetPercentage } from "../utils/style"
import styles from "../styles/progress-bar.module.css"

const generateCircles = (count, key) => (
    <>
        {
            [...Array(count).keys()].map(value => <div key={`${key}_${value}`} className={styles.quesTrack} />)
        }
    </>
)

const ProgressBar = ({ current, total }) => {
    const length = GetPercentage(current, total);
    return (
        <div className={styles.barWrapper}>
            <div className={styles.activeBar} style={{ width: `${length}%` }}>{generateCircles(current, 'done')}</div>
            <div className={styles.bar} style={{ width: `${100 - length}%` }}>{generateCircles(total - current, 'left')}</div>
        </div>
    )
}

ProgressBar.propTypes = {
    current: PropTypes.number,
    total: PropTypes.number
}

ProgressBar.defaultProps = {
    current: 1,
    total: 10
}

export default ProgressBar
