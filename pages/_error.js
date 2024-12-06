import React from 'react';
import Error from '../components/errorpage'

const ErrorPage = ({ statusCode }) => {
    return (
        <Error statusCode={statusCode}></Error>
    );
};

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;
