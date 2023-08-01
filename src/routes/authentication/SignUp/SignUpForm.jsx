import React, { Fragment, useState } from 'react'
import './SignUpForm.scss'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.config'
import FormInput from '../../../components/FormInput/FormInput'
import Button from '../../../components/Button/Button'

const defaultFormFieldValues = {
	displayName: '',
	userEmail: '',
	password: '',
	confirmPassword: '',
}

export default function SignUpForm() {

	const [formFields, setFormFields] = useState(defaultFormFieldValues)
	const { displayName, userEmail, password, confirmPassword } = formFields

	function onInputChangeHandler(event) {
		const { name, value } = event.target
		setFormFields({ ...formFields, [name]: value })
	}

	async function onFormSubmitHandler(event) {
		event.preventDefault()
		// Check if the entered password matches with confirm password
		if ((password !== confirmPassword) || (!userEmail.length > 0)) {
			console.log('passwords do not match')
			return
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(userEmail, password)
			await createUserDocumentFromAuth(user, { displayName })
			setFormFields(defaultFormFieldValues)
		}
		catch (error) {
			if (error?.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error', error);
			}
		}
	}

	return (
		<Fragment>
			<div className='sign-up-container'>
				<h2>Don't have an account?</h2>
				<span>Sign up with username and password</span>
				<form onSubmit={(event) => onFormSubmitHandler(event)}>

					<FormInput
						label='User Name'
						name='displayName'
						value={displayName}
						type='text'
						required
						onChange={(event) => onInputChangeHandler(event)} />

					<FormInput
						label='Email'
						name='userEmail'
						value={userEmail}
						type='email'
						required
						onChange={(event) => onInputChangeHandler(event)} />

					<FormInput
						label='Password'
						name='password'
						value={password}
						type='password'
						required
						onChange={(event) => onInputChangeHandler(event)} />

					<FormInput
						label='Confirm Password'
						name='confirmPassword'
						value={confirmPassword}
						type='password'
						required
						onChange={(event) => onInputChangeHandler(event)} />

					<Button type='submit'>Sign Up</Button>
				</form>
			</div>
		</Fragment>
	)
}
