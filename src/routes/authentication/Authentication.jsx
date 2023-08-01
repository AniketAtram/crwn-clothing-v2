import React, { Fragment } from 'react'
import './Authentication.scss'
import SignUpForm from './SignUp/SignUpForm'
import LoginForm from './Login/LoginForm'

export default function Authentication() {
	return (
		<Fragment>
		<div className='authentication-container'>
			<SignUpForm/>
			<LoginForm />
		</div>
		</Fragment>
	)
}
