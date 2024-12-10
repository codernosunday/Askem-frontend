import React, { useEffect, useState, useContext } from 'react'

import { publicFetch } from '../../../util/fetcher'
import { GroupAuthContext } from '../../../store/groupauth'
import PageTitle from '../../page-title'
import SearchInput from '../../search-input'
import UserList from '../../user-list'
import UserItem from '../../user-list/user-item-group'
import styles from './usergroup.module.css'
import { Spinner } from '../../icons'

const UsersManage = () => {
    const [searchTerm, setSearchTerm] = useState(null)
    const [users, setUsers] = useState(null)
    const [waitList, setWaitList] = useState(null)
    const [listAdmin, setListAdmin] = useState(null)
    const [loading, setLoading] = useState(false)

    const { valueGroup } = useContext(GroupAuthContext)

    const fetchListWait = () => {
        if (searchTerm === null) {
            const fetchUser = async () => {
                const { data } = await publicFetch.get(`/group/${valueGroup.inGroup}/waitlistuser`)
                setWaitList(data)
            }
            fetchUser()
        }
    }
    const fetchAdminList = () => {
        if (searchTerm === null) {
            const fetchUser = async () => {
                const { data } = await publicFetch.get(`/group/${valueGroup.inGroup}/adminlist`)
                setListAdmin(data)
            }
            fetchUser()
        }
    }
    const fetchListMember = (searchTerm) => {
        if (searchTerm === null) {
            const fetchUser = async () => {
                const { data } = await publicFetch.get(`/group/${valueGroup.inGroup}/member`)
                setUsers(data)
            }
            fetchUser()
        } else {
            const delayDebounceFn = setTimeout(async () => {
                setLoading(true)
                const { data } = await publicFetch.get(
                    searchTerm ? `/users/${searchTerm}` : `/users`
                )
                setUsers(data)
                setLoading(false)
            }, 500)

            return () => clearTimeout(delayDebounceFn)
        }
    }
    useEffect(() => {
        fetchListWait()
        fetchAdminList()
        fetchListMember(searchTerm)
    }, [searchTerm])


    return (
        <>
            <div >
                <div>
                    <PageTitle title="Request to join group &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" borderBottom={false} className={styles.pageTitle} />
                    {!waitList && (
                        <div className={styles.loading}>
                            <Spinner />
                        </div>
                    )}

                    {waitList && (
                        <>
                            <UserList>
                                {waitList?.map(({ username, profilePhoto, id }) => (
                                    <UserItem
                                        key={id}
                                        username={username}
                                        profilePhoto={profilePhoto}
                                        group={valueGroup.inGroup}
                                        outGroup={true}
                                        className={styles.userItem}
                                    />
                                ))}
                            </UserList>
                            {waitList.length == 0 && (
                                <p className={styles.notFound}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No request yet</p>
                            )}
                        </>
                    )}




                    <PageTitle title="Member in group" borderBottom={false} className={styles.pageTitle} />
                    {!users && (
                        <div className={styles.loading}>
                            <Spinner />
                        </div>
                    )}

                    {users && (
                        <>
                            <UserList>
                                {users?.map(({ username, profilePhoto, id }) => (
                                    <UserItem
                                        key={id}
                                        username={username}
                                        profilePhoto={profilePhoto}
                                        group={valueGroup.inGroup}
                                        inGroup={true}
                                        outGroup={false}
                                        className={styles.userItem}
                                    />
                                ))}
                            </UserList>
                            {users.length == 0 && (
                                <p className={styles.notFound}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have member</p>
                            )}
                        </>
                    )}
                </div>

                {valueGroup.isAuthor && (
                    <div>
                        <PageTitle title="List Admin" borderBottom={false} className={styles.pageTitle} />
                        {!listAdmin && (
                            <div className={styles.loading}>
                                <Spinner />
                            </div>
                        )}

                        {listAdmin && (
                            <>
                                <UserList>
                                    {listAdmin?.map(({ username, profilePhoto, id }) => (
                                        <UserItem
                                            key={id}
                                            username={username}
                                            profilePhoto={profilePhoto}
                                            group={valueGroup.inGroup}
                                            inGroup={false}
                                            outGroup={false}
                                            admin={true}
                                            className={styles.userItem}
                                        />
                                    ))}
                                </UserList>
                                {listAdmin.length == 0 && (
                                    <p className={styles.notFound}>Add admin to your group.</p>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>



        </>
    )
}

export default UsersManage





