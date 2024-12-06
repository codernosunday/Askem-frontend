import React, { useContext } from 'react'
import cn from 'classnames'

import { AuthContext } from '../../store/auth'

import Button from '../button'

import styles from './page-title.module.css'

const PageTitle = ({ title, button, borderBottom = true, group = false, askBtn = false, adminBtn = false, children }) => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <div className={cn(styles.container, borderBottom && styles.borderBottom)}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <div className={styles.buttonContainer}>
          {button && (
            <Button
              href={isAuthenticated() ? '/questions/ask' : '/auth'}
              className={styles.btndatcauhoi}
            >
              Ask Question
            </Button>
          )}
          {group && (
            <Button
              href={isAuthenticated() ? '/groups/createGroup' : '/auth'}
              className={styles.btndatcauhoi}
            >
              Create group
            </Button>
          )}
          {askBtn && (
            <Button
              href={isAuthenticated() ? '/groups/ask' : '/auth'}
              className={styles.btndatcauhoi}
            >
              Ask question
            </Button>
          )}
          {adminBtn && (
            <Button
              href={isAuthenticated() ? '/groups/admin' : '/auth'}
              className={styles.btndatcauhoi}
            >
              Group manage
            </Button>
          )
          }
        </div>
      </div>
      {children && <p className={styles.summary}>{children}</p>}

    </div>
  )
}

export default PageTitle
