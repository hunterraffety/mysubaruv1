import React from 'react'

import { css } from '@emotion/css'
import Header from '../shared/Header'

const BaseLayout = ({ children }) => {
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <Header />
      {children}
    </div>
  )
}

export default BaseLayout
