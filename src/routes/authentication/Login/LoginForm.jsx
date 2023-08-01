import React, { Fragment, useState } from 'react'
import './LoginForm.scss'

import { signInUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.config'
import FormInput from '../../../components/FormInput/FormInput'
import Button from '../../../components/Button/Button'

const defaultFormFieldValues = {
  userEmail: '',
  password: '',
}

export default function LoginForm() {

  const [formFields, setFormFields] = useState(defaultFormFieldValues)
  const { userEmail, password } = formFields

  function onInputChangeHandler(event) {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  async function signInWithGoogle() {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  async function onFormSubmitHandler(event) {
    event.preventDefault()
    try {
      const response = await signInUserWithEmailAndPassword(userEmail, password)
      setFormFields(defaultFormFieldValues)
    }
    catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break;
        default:
          console.log(error)
      }
    }
  }

  return (
    <Fragment>
      <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign In</span>
        <form onSubmit={(event) => onFormSubmitHandler(event)}>

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
          <div className='buttons-container'>
            <Button type='submit'>Sign In</Button>
            <Button type='button' buttonType={'google'} onClick={signInWithGoogle}>Sign In With Google</Button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}
