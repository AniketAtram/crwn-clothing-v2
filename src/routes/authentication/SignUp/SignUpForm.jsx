import React, { Fragment, useState } from 'react'

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

	return (
		<Fragment>
			<div>
				<h1>Sign uo with username and password</h1>
				<form onSubmit={() => { }}>
					<label>Username</label>
					<input name='displayName' type='text' required onChange={(event) => onInputChangeHandler(event)} />

					<label>Email</label>
					<input name='userEmail' type='email' required onChange={(event) => onInputChangeHandler(event)} />

					<label>Password</label>
					<input name='password' type='password' required onChange={(event) => onInputChangeHandler(event)} />

					<label>Confirm Password</label>
					<input name='confirmPassword' type='password' required onChange={(event) => onInputChangeHandler(event)} />

					<button type='submit'>Sign Up</button>
				</form>
			</div>
		</Fragment>
	)
}
