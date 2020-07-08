import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/base.css'
import '../styles/index.scss'

import BaseLayout from '../components/layouts/BaseLayout'
import Head from 'next/head'

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
        <Component {...pageProps} />
      </BaseLayout>
    )
  }
}
