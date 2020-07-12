import React from 'react'

import HeaderNav from './HeaderNav'
import Link from 'next/link'

const Header = ({ user, loading }) => {
  return (
    <div className="headerContainer">
      <div className="headerText">
        <Link href="/">
          <a>.mysubaru.</a>
        </Link>
      </div>
      <HeaderNav user={user} loading={loading} />
    </div>
  )
}

export default Header
