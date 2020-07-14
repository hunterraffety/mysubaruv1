import React from 'react'

import { css } from '@emotion/css'

import auth0, { authorizeUser } from '@/utils/auth0'

import BasePage from '@/components/layouts/BasePage'
import Redirect from '@/components/shared/Redirect/Redirect'
import withAuth from '@/components/auth/withAuth'

const Ssr = ({ user }) => {
  return (
    <BasePage type="secret">
      <h1>SSR {user && user.name}</h1>
    </BasePage>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const user = await authorizeUser(req, res)
  return {
    props: { user },
  }
}

export default Ssr
