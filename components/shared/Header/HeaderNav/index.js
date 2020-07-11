import React from 'react'

import Link from 'next/link'

const HeaderNav = () => {
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
    </div>
  )
}

export default HeaderNav