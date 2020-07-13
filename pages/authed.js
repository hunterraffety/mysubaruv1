import React from 'react'

import BasePage from '@/components/layouts/BasePage'

import { useGetUser } from '../hooks/useGetUser'
import { useRouter } from 'next/router'
import Redirect from '../components/shared/Redirect/Redirect'
import withAuth from '../components/auth/withAuth'

const Authed = () => {
  return (
    <BasePage type="secret">
      <h1>Authed</h1>
    </BasePage>
  )
}

export default withAuth(Authed)
