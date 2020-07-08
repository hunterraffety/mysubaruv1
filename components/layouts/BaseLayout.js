import React from 'react'
import Header from '../shared/Header'

const BaseLayout = ({ children, ...props }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default BaseLayout
