import Head from 'next/head'
import '../styles/base.css'
import '../styles/index.scss'
import BaseLayout from '../components/layouts/BaseLayout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>I drive my Subaru, what do you drive?</title>
      </Head>
      <BaseLayout>
        <Component {...pageProps} appProps="Test" />
      </BaseLayout>
    </>
  )
}
