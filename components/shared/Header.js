import React from 'react'

import Link from 'next/link'

const Header = () => {
	return (
		<div>
			<h1>Header</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Link href='/blog'>
				<a>Blog</a>
			</Link>
			<Link href='/galleries'>
				<a>Galleries</a>
			</Link>
		</div>
	)
}

export default Header
