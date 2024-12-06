import React from 'react'

import styles from './question-wrapper.module.css'

const QuestionWrapper = ({ children }) => {
  return <div className={styles.card}>{children}</div>
}

export default QuestionWrapper
