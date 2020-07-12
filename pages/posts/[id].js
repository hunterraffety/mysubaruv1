import React from 'react'

import { withRouter } from 'next/router'
import axios from 'axios'

import BasePage from '@/components/layouts/BasePage'
import Link from 'next/link'

const Post = ({ post }) => {
  return (
    <BasePage type="singlePost">
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Link href="/posts">... back</Link>
    </BasePage>
  )
}

Post.getInitialProps = async ({ query }) => {
  let post = {}
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    )
    post = res.data
  } catch (e) {
    console.error(e)
  }

  return { post: post }
}

export default withRouter(Post)
