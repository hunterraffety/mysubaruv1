import React from 'react'

import axios from 'axios'
import Link from 'next/link'

import { css } from '@emotion/css'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

import BasePage from '@/components/layouts/BasePage'

const Posts = ({ posts }) => {
  return (
    <BasePage type="blogs">
      {posts.map(post => {
        return (
          <div className="postsContainer" key={post.id}>
            <Link as={`./posts/${post.id}`} href="/posts/[id]">
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

Posts.getInitialProps = async ctx => {
  const res = await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res)
    .catch()
  const posts = res.data.slice(0, 10)
  return {
    posts,
  }
}

export default Posts
