import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PageTitle from '../../components/page-title';
import Layout from '../../components/layout';
import AdminTag from '../../components/administrator';
import { AuthContext } from '../../store/auth'
import Error from '../../components/errorpage'
function Administrator() {
    const { authState, isAdmin } = useContext(AuthContext)
    if (isAdmin())
        return (
            <>
                <Layout extra={false}>
                    <PageTitle title="Administrator"></PageTitle>
                    <AdminTag></AdminTag>
                </Layout>

            </>
        )
    return (
        <>
            <Error statusCode={404}></Error>
        </>
    )
}
export default Administrator