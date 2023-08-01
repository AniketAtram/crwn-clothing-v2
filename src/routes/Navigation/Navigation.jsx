import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './Navigation.scss'

export default function Navigation() {
	return (
		<>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrownLogo className='logo'/>
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					<Link className='nav-link' to='/login'>
						LOGIN
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	)
}
