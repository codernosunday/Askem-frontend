import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import NavItem from './nav-item'
import { World, Logo, Tags, Users, Groups, Admin } from '../icons'
import styles from './navigation.module.css'
import { AuthContext } from '../../store/auth'
const Navigation = () => {
  const router = useRouter()
  const { authState, isAdmin } = useContext(AuthContext)
  return (
    <nav className={styles.nav}>
      <NavItem
        href="/"
        selected={
          router.pathname == '/' || router.pathname.split('/')[1] == 'questions'
        }
      >
        <Logo />
        <span className={styles.color}>Askem</span>
      </NavItem>

      <NavItem href="/tags" selected={router.pathname == '/tags'}>
        <Tags />
        <span>Tags</span>
      </NavItem>

      <NavItem
        href="/users"
        selected={router.pathname.split('/')[1] == 'users'}
      >
        <Users />
        <span>Users</span>
      </NavItem>
      <NavItem
        href="/groups"
        selected={router.pathname == '/groups'}
      >
        <Groups />
        <span>Groups</span>
      </NavItem>
      {isAdmin() && (<NavItem
        href="/administrator"
        selected={router.pathname == '/administrator'}
      >
        <Admin />
        <span>Administator</span>
      </NavItem>)}

    </nav>
  )
}

export default Navigation
