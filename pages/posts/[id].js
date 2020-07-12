import React from 'react'

import { useRouter } from 'next/router'
import axios from 'axios'

import BasePage from '@/components/layouts/BasePage'
import Link from 'next/link'

import { useGetPostById } from '../../hooks'

const Post = ({ post }) => {
  const router = useRouter()
  const { data, error, loading } = useGetPostById(router.query.id)

  return (
    <BasePage type="singlePost">
      {loading && <p>Loading</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <p>{data.title}</p>
          <p>{data.body}</p>
          <Link href="/posts">... back</Link>
        </>
      )}
    </BasePage>
  )
}

export default Post
