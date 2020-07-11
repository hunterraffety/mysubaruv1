import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Link from 'next/link'

import { css } from '@emotion/css'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

import BasePage from '@/components/layouts/BasePage'

import { useGetPosts } from '../../hooks/useGetPosts'

const Posts = () => {
  const { posts } = useGetPosts()
  return (
    <BasePage type="blogs">
      {posts &&
        posts.map(post => {
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
    </BasePage>
  )
}

export default Posts
