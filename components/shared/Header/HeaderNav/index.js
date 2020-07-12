import React from 'react'

import Link from 'next/link'
import Button from '../../Button'

const HeaderNav = props => {
  const { loading, user } = props
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
      {!loading && (
        <>
          {user && <Button type="signout" text="Sign Out" />}
          {!user && <Button type="signin" text="Sign In" />}
        </>
      )}
    </div>
  )
}

export default HeaderNav
