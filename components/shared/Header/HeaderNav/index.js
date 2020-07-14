import React from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'
import Button from '../../Button'

const HeaderNav = props => {
  const { error, loading, user } = props
  const router = useRouter()

  return (
    <div className="headerNavContainer">
      <Link href="/posts">
        <a className="navLink">Blog</a>
      </Link>
      <Link href="/galleries">
        <a className="navLink">Galleries</a>
      </Link>
      <Link href="/about">
        <a className="navLink">About</a>
      </Link>
      <Link href="/authed">
        <a className="navLink">Authed</a>
      </Link>
      {!loading && (
        <>
          {user && (
            <Button
              variant="logout"
              text="Logout"
              handleClick={() => {
                router.push('/api/v1/logout')
              }}
            />
          )}
          {!user && (
            <Button
              variant="login"
              text="Login"
              handleClick={() => {
                router.push('/api/v1/login')
              }}
            />
          )}
        </>
      )}
    </div>
  )
}

export default HeaderNav
