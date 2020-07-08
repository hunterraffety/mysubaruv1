import Head from 'next/head'
import '../styles/base.css'
import BaseLayout from '../components/layouts/BaseLayout'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Tailwindcss Emotion Example</title>
			</Head>
			<BaseLayout>
				<Component {...pageProps} />
			</BaseLayout>
		</>
	)
}
