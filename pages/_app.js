import React, { Component } from 'react'

import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/base.css'
import '../styles/index.scss'

import BaseLayout from '../components/layouts/BaseLayout'

const App = ({ Component, pageProps }) => {
  return (
    <BaseLayout>
      <Head>
        <title>.mysubaru. | 2020</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default App
