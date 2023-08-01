import React, { Fragment, useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.config'

export default function Login() {

  async function LogGoogleUser() {
    const response = await signInWithGooglePopup()
    // console.log(response.user)
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }

  return (
    <Fragment>
      <h2>Login Page</h2>
      <button onClick={() => LogGoogleUser()}>Sign In With Google</button>
    </Fragment>
  )
}
