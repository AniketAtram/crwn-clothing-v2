import React, { Fragment } from 'react'
import './Authentication.scss'
import SignUpForm from '../../components/SignUp/SignUpForm'
import LoginForm from '../../components/Login/LoginForm'

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
