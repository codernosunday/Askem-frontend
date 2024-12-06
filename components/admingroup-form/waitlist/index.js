import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { GroupAuthContext } from '../../../store/groupauth'
import { publicFetch } from '../../../util/fetcher'
import { FetchContext } from '../../../store/fetch'
import QuestionWrapper from '../../question/question-wrapper'
import QuestionStats from '../../question/question-stats'
import QuestionSummary from '../../question/question-summary'
import ButtonGroup from '../../button-group'
import { Spinner } from '../../icons'
import styles from './waitlist.module.css'
const AdminFormGroupQuestion = () => {
    const router = useRouter()
    const { authAxios } = useContext(FetchContext)
    const [questions, setQuestions] = useState(null)
    const [sortType, setSortType] = useState('Votes')
    const { valueGroup } = useContext(GroupAuthContext)
    const fetchQuestion = async () => {
        const { data } = await publicFetch.get(`/group/${valueGroup.inGroup}/waitlist`)
        setQuestions(data)
    }
    const handleDelete = async (questionId) => {
        const res = window.confirm('Unapprove this post?')
        if (res) {
            await authAxios.delete(`/question/groupadmin/${questionId}`)
            await fetchQuestion()
        }
    }
    const handleAccept = async (questionId) => {
        await authAxios.post(`/group/acceptquestion/${valueGroup.inGroup}/${questionId}`)
        await fetchQuestion()
    }
    useEffect(() => {
        try {
            fetchQuestion()
            const fetchQuestionByTag = async () => {
                const { data } = await publicFetch.get(`/questions/${router.query.tag}`)
                setQuestions(data)
            }

            if (router.query.tag) {
                fetchQuestionByTag()
            } else {
                fetchQuestion()
            }
        }
        catch (error) { }
    }, [router.query.tag])
    const handleSorting = () => {
        switch (sortType) {
            case 'Newest':
                return (a, b) => new Date(b.created) - new Date(a.created)
            case 'Oldest':
                return (a, b) => new Date(a.created) - new Date(b.created)
            default:
                break
        }
    }
    return (
        <>

            <ButtonGroup
                borderBottom
                buttons={['Newest', 'Oldest']}
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
                    ({
                        id,
                        votes,
                        answers,
                        views,
                        title,
                        text,
                        tags,
                        author,
                        created
                    }) => (
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
                            <div className={styles.btncontainer}>
                                <button className={styles.btnWaitList} onClick={() => handleAccept(id)}>accept</button>
                                <button className={styles.btnWaitList} onClick={() => handleDelete(id)}>delete</button>
                            </div>
                        </QuestionWrapper>
                    )
                )}
        </>
    )
}

export default AdminFormGroupQuestion