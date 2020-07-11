import React from 'react'

import { css } from '@emotion/css'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

import axios from 'axios'
// import Link from "next/link";
import { Link } from '../routes'
import BasePage from '../components/layouts/BasePage'

const PostsContainer = styled('div')`
  width: 100%;
`

const Posts = props => {
  const { posts } = props
  console.log(posts)
  return (
    <BasePage type="blogs">
      {posts.map(post => {
        return (
          <PostsContainer
            className="singlePostContainer"
            css={tw('justify-center')}
            key={post.id}
          >
            <Link route={`/post/${post.id}`}>
              <a
                className={css`
                  text-decoration: underline;
                `}
              >
                {post.title}
              </a>
            </Link>
            <p>{post.body}...</p>
          </PostsContainer>
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
