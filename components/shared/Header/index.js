import React from 'react'

import HeaderNav from './HeaderNav'
import Link from 'next/link'

import { useGetUser } from '.,/../../hooks/useGetUser'

const Header = () => {
  const { data, error, loading } = useGetUser()
  return (
    <div className="headerContainer">
      <div className="headerText">
        <Link href="/">
          <a>.mysubaru.</a>
        </Link>
      </div>
      <HeaderNav user={data} loading={loading} error={error} />
    </div>
  )
}

export default Header
