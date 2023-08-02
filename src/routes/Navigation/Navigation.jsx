import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './Navigation.scss'

import { UserContext } from '../../context/userContext'
import { signOutUser } from '../../utils/firebase/firebase.config'

export default function Navigation() {

	const { currentUser, setCurrentUser } = useContext(UserContext)

	function onSignOutClickHandler() {
		signOutUser()
		setCurrentUser(null)
	}

	return (
		<>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrownLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					{
						currentUser ? (
							<Link className='nav-link' onClick={() => onSignOutClickHandler()}>
								🚪SIGN OUT
							</Link>
						) : (
							<Link className='nav-link' to='/auth'>
								📬LOGIN
							</Link>
						)
					}
				</div>
			</div>
			<Outlet />
		</>
	)
}
