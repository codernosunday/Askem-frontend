import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { FetchContext } from '../../../store/fetch'
import styles from './user-item.module.css'

const UserItem = ({ username, profilePhoto, group, outGroup = true, inGroup = false, admin = false }) => {
  const { authAxios } = useContext(FetchContext)
  const handleAcceptMember = async () => {
    const { data } = authAxios.post('/group/acceptmember', { group: group, name: username })
  }
  const handleUnAcceptMember = async () => {
    const { data } = authAxios.post('/group/unacceptmember', { group: group, name: username })
  }
  //
  const handleKick = async () => {
    const { data } = authAxios.post('/group/removemember', { group: group, name: username })
  }
  const handleAdminAccept = async () => {
    const { data } = authAxios.post('/group/admingroup', { group: group, name: username })
  }
  //
  const unAdmin = async () => {
    const { data } = authAxios.post('/group/removemember', { group: group, name: username })
  }
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <Link href="/users/[username]" as={`/users/${username}`}>
          <a>
            <img src={profilePhoto} alt={username} />
          </a>
        </Link>
        <div className={styles.name}>
        <Link href="/users/[username]" as={`/users/${username}`}>
            <a className={styles.name}>{username}</a>
        </Link>
      </div>
      </div>
      


      <div className={styles.body}>
        
        <div className={styles.buttonContainer}>
          {outGroup && (<div>
            <button className={styles.btnAdminGroup} onClick={() => handleAcceptMember()}>Accept</button>
            <button className={styles.btnAdminGroup} onClick={() => handleUnAcceptMember()}>Unaccept</button>
          </div>)}
          {inGroup && (<div>
            <button className={styles.btnAdminGroup} onClick={() => handleKick()}>Kick</button>
            <button className={styles.btnAdminGroup} onClick={() => handleAdminAccept()}>Admin</button>
          </div>)}
          {admin == true && (<div>
            <button className={styles.btnAdminGroup} onClick={() => unAdmin()}>UnAdmin</button>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default UserItem
