import React from 'react'

import { useGetUser } from '../hooks/useGetUser'
import { useRouter } from 'next/router'

import { css } from '@emotion/css'

import BasePage from '@/components/layouts/BasePage'
import Redirect from '@/components/shared/Redirect/Redirect'
import withAuth from '@/components/auth/withAuth'

const Authed = ({ user, loading }) => {
  console.log(user, loading)
  const name = `${user.given_name}`
  return (
    <BasePage type="secret">
      <h1>Welcome, {name}</h1>
      <img
        src={`${user.picture}`}
        className={css`
          margin: 1rem;
          border-radius: 50%;
          width: 50%;
        `}
      />
    </BasePage>
  )
}

export default withAuth(Authed)
