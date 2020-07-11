import React, { Component } from 'react'

import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/base.css'
import '../styles/index.scss'

import BaseLayout from '../components/layouts/BaseLayout'

export default class App extends Component {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <BaseLayout>
        <Head>
          <title>.mysubaru. | 2020</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </BaseLayout>
    )
  }
}
