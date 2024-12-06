// pages/_error.js
import React from 'react';
import Link from 'next/link';
import styles from './ErrorPage.module.css'; // Optional: Import custom styles for your error page

const ErrorPage = ({ statusCode }) => {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorTitle}>
                {statusCode ? `Error ${statusCode}` : 'An error occurred'}
            </h1>
            <p className={styles.errorMessage}>
                {statusCode
                    ? `An error ${statusCode} occurred on the server.`
                    : 'An error occurred on the client.'}
            </p>
            <Link href="/">
                <a className={styles.homeLink}>Go back to Home</a>
            </Link>
        </div>
    );
};

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;
