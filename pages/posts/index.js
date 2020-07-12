import React from 'react'
import Link from 'next/link'

import { css } from '@emotion/css'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

import BasePage from '@/components/layouts/BasePage'

import { useGetData } from '../../hooks/useGetData'

const Posts = () => {
  const { data, error, loading } = useGetData()

  return (
    <BasePage type="blogs">
      {loading ? (
        <h3
          className={css`
            text-align: center;
            font-size: 6rem;
          `}
        >
          Loading...
        </h3>
      ) : null}
      {data &&
        data.map(post => {
          return (
            <div className="postsContainer" key={post.id}>
              <Link as={`/posts/${post.id}`} href="/posts/[id]">
                <a
                  className={css`
                    text-decoration: underline;
                  `}
                >
                  {post.title}
                </a>
              </Link>
              <p>{post.body}...</p>
            </div>
          )
        })}
      {error && <div>{error.message}</div>}
    </BasePage>
  )
}

export default Posts
