import React from 'react'

import { useRouter } from 'next/router'
import axios from 'axios'

import BasePage from '@/components/layouts/BasePage'
import Link from 'next/link'

import { useGetData } from '../../hooks/useGetData'

const Post = ({ post }) => {
  const router = useRouter()
  const { data, error, loading } = useGetData(
    router.query.id ? `/api/v1/posts/${router.query.id}` : null
  )

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
