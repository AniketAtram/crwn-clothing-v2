import React, { Fragment } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.config'

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
