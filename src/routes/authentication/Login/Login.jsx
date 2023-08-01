import React, { Fragment } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.config'

import SignUpForm from '../SignUp/SignUpForm'

export default function Login() {

  async function LogGoogleUser() {
    const response = await signInWithGooglePopup()
    await createUserDocumentFromAuth(response.user)
  }

  return (
    <Fragment>
      <h2>Login Page</h2>
      <button onClick={() => LogGoogleUser()}>Sign In With Google</button>
      <SignUpForm />
    </Fragment>
  )
}
