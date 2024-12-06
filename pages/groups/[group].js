import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GroupAuthContext } from '../../store/groupauth';
import { publicFetch } from '../../util/fetcher';
import PageTitle from '../../components/page-title';
import Layout from '../../components/layout';
import { FetchContext } from '../../store/fetch';

import QuestionWrapper from '../../components/question/question-wrapper';
import QuestionStats from '../../components/question/question-stats';
import QuestionSummary from '../../components/question/question-summary';
import ButtonGroup from '../../components/button-group';
import { Spinner } from '../../components/icons';
import styles from './stylegroup.module.css';

export async function getServerSideProps(context) {
    const { group } = context.params;

    return {
        props: { name: group },
    };
}

const GroupDetail = ({ name }) => {
    const { authAxios } = useContext(FetchContext);
    const router = useRouter();
    const [questions, setQuestions] = useState(null);
    const [sortType, setSortType] = useState('Votes');
    const [btnText, setBtnText] = useState('Join group');
    const { valueGroup, setValueGroup } = useContext(GroupAuthContext);
    const [group, setGroup] = useState(true);
    useEffect(() => {
        if (name) {
            localStorage.setItem('groupName', name);
        } else {
            const storedName = localStorage.getItem('groupName');
            if (storedName) {
                name = storedName;
            }
        }
    }, [name]);

    const handleJoin = async () => {
        try {
            await authAxios.post(`/group/${valueGroup.inGroup}/joingroup`);
            setBtnText('Requested');
        } catch (error) {
            console.error("Error joining group:", error);
        }
    };

    useEffect(() => {
        const fetchGroupData = async () => {
            try {
                const { data } = await authAxios.get(`/group/${name}`);
                setValueGroup(data);

                if (data.isWaiting && !data.isAdmin && !data.isAuthor) {
                    setBtnText('Requested');
                    setGroup(true);
                }
                if (data.isAdmin || data.isAuthor || data.isUser) {
                    setGroup(false);
                    setBtnText('Leave group');
                }
            } catch (error) {
                console.error("Error fetching group data:", error);
            }
        };

        const fetchQuestions = async () => {
            try {
                const { data } = await publicFetch.get(`/group/${name}/question`);
                setQuestions(data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        const fetchQuestionsByTag = async () => {
            try {
                const { data } = await publicFetch.get(`/questions/${router.query.tag}`);
                setQuestions(data);
            } catch (error) {
                console.error("Error fetching questions by tag:", error);
            }
        };

        if (router.query.tag) {
            fetchQuestionsByTag();
        } else {
            fetchQuestions();
        }

        fetchGroupData();
    }, [router.query.tag]);

    const handleSorting = () => {
        switch (sortType) {
            case 'Votes':
                return (a, b) => b.score - a.score;
            case 'Views':
                return (a, b) => b.views - a.views;
            case 'Newest':
                return (a, b) => new Date(b.created) - new Date(a.created);
            case 'Oldest':
                return (a, b) => new Date(a.created) - new Date(b.created);
            default:
                break;
        }
    };

    return (
        <>
            <Head>
                <title>Group {valueGroup.inGroup}</title>
            </Head>
            <Layout extra={true}>
                <PageTitle title={name} askBtn={valueGroup.isUser || valueGroup.isAdmin} adminBtn={valueGroup.isAdmin} borderBottom={false} />
                {group && (
                    <div className={styles.buttonContainer}>
                        <button className={styles.btndatcauhoi} onClick={handleJoin}>{btnText}</button>
                    </div>
                )}
                {valueGroup.isUser || valueGroup.isAdmin ? (
                    <div>
                        <ButtonGroup
                            borderBottom
                            buttons={['Votes', 'Views', 'Newest', 'Oldest']}
                            selected={sortType}
                            setSelected={setSortType}
                        />
                        {!questions && (
                            <div className="loading">
                                <Spinner />
                            </div>
                        )}

                        {questions
                            ?.sort(handleSorting())
                            .map(
                                ({ id, votes, answers, views, title, text, tags, author, created }) => (
                                    <QuestionWrapper key={id}>
                                        <QuestionStats
                                            voteCount={votes.length}
                                            answerCount={answers.length}
                                            view={views}
                                        />
                                        <QuestionSummary
                                            id={id}
                                            title={title}
                                            tags={tags}
                                            author={author}
                                            createdTime={created}
                                        >
                                            <div dangerouslySetInnerHTML={{ __html: text }} />
                                        </QuestionSummary>
                                    </QuestionWrapper>
                                )
                            )}
                    </div>
                ) : (
                    <div className={styles.Thisisaprivategroup}>This is a private group</div>
                )}
            </Layout>
        </>
    );
};

export default GroupDetail;
