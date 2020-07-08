import React from 'react'

import { withRouter } from 'next/router'
import axios from 'axios'

const Post = props => {
  const { post } = props
  return (
    <div>
      <h1>
        <span style={{ color: 'red' }}>ID:</span> {post.id}
      </h1>
      <h2 style={{ color: 'red' }}>Post Title:</h2>
      <p>{post.title}</p>
      <h2 style={{ color: 'red' }}>Post Body:</h2>
      <p>{post.body}</p>
    </div>
  )
}

Post.getInitialProps = async ({ query }) => {
  const res = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    .then(res => res)
    .catch()
  const post = res.data
  return {
    post,
  }
}

export default withRouter(Post)
