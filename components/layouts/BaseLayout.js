import React from 'react'

import { css } from '@emotion/css'

import Footer from '../shared/Footer'
import Header from '../shared/Header'
import BasePage from './BasePage'

const BaseLayout = ({ children }) => {
  return (
    <div className="appContainer">
      <Header />
      <BasePage type="main">{children}</BasePage>
      <Footer />
    </div>
  )
}

export default BaseLayout
