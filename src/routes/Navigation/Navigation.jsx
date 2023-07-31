import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
	return (
		<>
			<div className='navigation'>
				<link className='logo-container' to='/'>
					<div>Logo</div>
				</link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
				</div>
			</div>
		</>
	)
}
