import React from 'react'

import { css } from '@emotion/css'

import Footer from '../shared/Footer'
import Header from '../shared/Header'

const BaseLayout = ({ children }) => {
  return (
    <div
      className={css`
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
      `}
    >
      <Header />
      <div className="contentContainer">{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
