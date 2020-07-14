import React from 'react'

import { css } from '@emotion/css'

import BasePage from '@/components/layouts/BasePage'

import { useGetUser } from '../hooks/useGetUser'
import { useRouter } from 'next/router'
import Redirect from '../components/shared/Redirect/Redirect'
import withAuth from '../components/auth/withAuth'

const Ssr = props => {
  console.log(props)
  const { data, loading } = useGetUser()

  return (
    <BasePage type="secret">
      <h1>SSR {data && data.name}</h1>
    </BasePage>
  )
}

export const getServerSideProps = ({ req, res }) => {
  return {
    props: { someData: 'some data! ok?' },
  }
}

export default Ssr
