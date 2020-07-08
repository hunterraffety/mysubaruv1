import React from 'react'

import Link from 'next/link'
import styled from '@emotion/styled'

const HeaderContainer = styled('div')`
  display: flex;
  width: 100%;
  background-color: #c3c3c3;
  border-bottom: 3px solid dodgerblue;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <a className="navLink">Home</a>
        </Link>
        <Link href="/about">
          <a className="navLink">About</a>
        </Link>
        <Link href="/blog">
          <a className="navLink">Blog</a>
        </Link>
        <Link href="/galleries">
          <a className="navLink">Galleries</a>
        </Link>
      </HeaderContainer>
      <style jsx>{`
        .navLink {
          font-size: 1.6rem;
        }
      `}</style>
    </>
  )
}

export default Header
