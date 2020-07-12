import React from 'react'

import { css } from '@emotion/css'

import Footer from '../shared/Footer'
import Header from '../shared/Header'
import BasePage from './BasePage'

import { useGetUser } from '../../hooks/useGetUser'

const BaseLayout = ({ children }) => {
  const { data, error, loading } = useGetUser()
  return (
    <div className="appContainer">
      <Header user={data} error={error} loading={loading} />
      <BasePage type="main">{children}</BasePage>
      <Footer />
    </div>
  )
}

export default BaseLayout
