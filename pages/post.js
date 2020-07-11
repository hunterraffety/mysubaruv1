import React from 'react'

import { withRouter } from 'next/router'
import axios from 'axios'

const Post = props => {
  const { post } = props
  return (
    <div className="postContainer">
      <p>{post.title}</p>
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
