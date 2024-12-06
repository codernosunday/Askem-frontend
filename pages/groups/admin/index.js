import React, { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import { publicFetch } from '../../../util/fetcher'
import { GroupAuthContext } from '../../../store/groupauth'
import Layout from '../../../components/layout'
import PageTitle from '../../../components/page-title'
import WaitList from '../../../components/admingroup-form/waitlist'
import UserManage from '../../../components/admingroup-form/usergroup'
import styles from './stylesadmingroup.module.css'
const AdminGroup = () => {
    const { valueGroup } = useContext(GroupAuthContext)
    const [showForm1, setShowForm1] = useState(false)
    const [showForm2, setShowForm2] = useState(false)
    const toggle1 = () => {
        setShowForm1((prevState) => !prevState)
        setShowForm2(false);
    }
    const toggle2 = () => {
        setShowForm2((prevState) => !prevState)
        setShowForm1(false);
    }
    return (
        <Layout extra={false}>
            <Head>
                <title>Create group</title>
            </Head>
            <div >
                <PageTitle title={`Admin group ${valueGroup.inGroup}`} borderBottom={false} />
                <div className={styles.buttonContainer}>
                    <button onClick={toggle1} className={styles.btnAdminGroup}>
                        Manage question
                    </button>
                    <button onClick={toggle2} className={styles.btnAdminGroup}>
                        Manage user
                    </button>
                </div>
                {showForm1 && (
                    <div>
                        <h1 >&nbsp;&nbsp;&nbsp;Waiting list</h1>
                        <WaitList />
                    </div>)}
                {showForm2 && (
                    <div>
                        <UserManage />
                    </div>)
                }
            </div>
        </Layout>
    )
}

export default AdminGroup