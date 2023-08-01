import React, { Fragment, useState } from 'react'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.config'

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
		console.log(formFields)
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
			console.log('Ooops Something went wrong!', error?.message)
		}
	}

	return (
		<Fragment>
			<div>
				<h1>Sign uo with username and password</h1>
				<form onSubmit={(event) => onFormSubmitHandler(event)}>
					<label>Username</label>
					<input name='displayName' value={displayName} type='text' required onChange={(event) => onInputChangeHandler(event)} />

					<label>Email</label>
					<input name='userEmail' value={userEmail} type='email' required onChange={(event) => onInputChangeHandler(event)} />

					<label>Password</label>
					<input name='password' value={password} type='password' required onChange={(event) => onInputChangeHandler(event)} />

					<label>Confirm Password</label>
					<input name='confirmPassword' value={confirmPassword} type='password' required onChange={(event) => onInputChangeHandler(event)} />

					<button type='submit'>Sign Up</button>
				</form>
			</div>
		</Fragment>
	)
}
