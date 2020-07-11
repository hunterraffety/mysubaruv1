import React from 'react'

import HeaderNav from './HeaderNav'
import Link from 'next/link'

const Header = props => {
  return (
    <div className="headerContainer">
      <div className="headerText">
        <Link href="/">
          <a>.mysubaru.</a>
        </Link>
      </div>
      <HeaderNav />
    </div>
  )
}

export default Header
