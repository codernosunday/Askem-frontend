import React, { useEffect, useState, useContext } from 'react';
import { Spinner } from '../../components/icons';
import { publicFetch } from '../../util/fetcher';
import styles from './stylestable.module.css';
import { FetchContext } from '../../store/fetch'
const UserListTable = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { authAxios } = useContext(FetchContext)
    const handleDelete = async (username) => {
        try {
            await publicFetch.delete(`/administrator/deleteuser/${username}`);
            setUserData(prevData => prevData.filter(user => user.username !== username));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    const fetchUserData = async () => {
        try {
            const { data } = await authAxios.get(`/administrator/viewuser`);
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className={styles.loading}>
                <Spinner />
            </div>
        );
    }
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableHeader}>Username</th>
                        <th className={styles.tableHeader}>Profile Photo</th>
                        <th className={styles.tableHeader}>Created</th>
                        <th className={styles.tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.username} className={styles.tableRow}>
                            <td className={styles.tableCell}>{user.username}</td>
                            <td className={styles.tableCell}>
                                <img src={user.profilePhoto} alt={`${user.username}'s profile`} className={styles.profilePhoto} />
                            </td>
                            <td className={styles.tableCell}>{new Date(user.created).toLocaleDateString()}</td>
                            <td className={styles.tableCell}>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => handleDelete(user.username)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserListTable;
