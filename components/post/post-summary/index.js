import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { Delete } from '../../icons'
import { AuthContext } from '../../../store/auth'
import { FetchContext } from '../../../store/fetch'

import Tag from '../../tag'

import styles from './post-summary.module.css'

const PostSummary = ({
  tags,
  author,
  created,
  questionId,
  answerId,
  setQuestion,
  children
}) => {
  const { authState, isAdmin } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)
  const router = useRouter()

  const handleDeleteComment = async () => {
    const res = window.confirm('Are you sure delete your post?')
    if (res) {
      const { data } = await authAxios.delete(
        answerId
          ? `/answer/${questionId}/${answerId}`
          : `/question/${questionId}`
      )

      if (answerId) {
        setQuestion(data)
      } else {
        router.push('/')
      }
    }
  }

  return (
    <div className={styles.postCell}>
      <div className={styles.text}>{children}</div>
      <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.tagContainer}>
            {tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className={styles.userDetails}>
            <Link href="/users/[user]" as={`/users/${author.username}`}>
              <a>
                <img
                  src={`${author.profilePhoto}`}
                  alt={author.username}
                />
              </a>
            </Link>
            <div className={styles.info}>
              <span>
                {tags ? 'asked' : 'answered'}{' '}
                {formatDistanceToNowStrict(new Date(created), {
                  addSuffix: true
                })}
              </span>
              <Link href="/users/[user]" as={`/users/${author.username}`}>
                <a>{author.username}</a>
              </Link>
            </div>
          </div>
        </div>
        {(authState.userInfo?.id === author.id || isAdmin()) && (
          <div className={styles.row}>
            <a className={styles.delete} onClick={() => handleDeleteComment()}>
              < Delete />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostSummary
