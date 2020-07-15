import React from 'react'

import { css } from '@emotion/css'

import auth0, { authorizeUser, withAuth } from '@/utils/auth0'

import BasePage from '@/components/layouts/BasePage'
import Redirect from '@/components/shared/Redirect/Redirect'

const Ssr = ({ user }) => {
  return (
    <BasePage type="secret">
      <h1>SSR {user && user.name}</h1>
    </BasePage>
  )
}

// export const getServerSideProps = async ({ req, res }) => {
//   const user = await authorizeUser(req, res)
//   return {
//     props: { user },
//   }
// }

const getTitle = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      return { title: 'Title' }
    }, 2000)
  })
}

export const getServerSideProps = withAuth(async () => {
  const title = await getTitle()
  return title
})

export default Ssr
