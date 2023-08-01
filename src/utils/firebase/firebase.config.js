import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDYBlMnGsuLVScYtcBggnewOTfvACeww2g",
	authDomain: "crown-clothing-project-v2.firebaseapp.com",
	projectId: "crown-clothing-project-v2",
	storageBucket: "crown-clothing-project-v2.appspot.com",
	messagingSenderId: "291819668746",
	appId: "1:291819668746:web:21ed14c9cc9e071913a6f3"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
})

export const auth = getAuth();

// User authentication using google account
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// Firestore DB Setups and configurations
export const db = getFirestore();

export async function createUserDocumentFromAuth(userAuth, additionalInformation={}) {

	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
		}
		catch (error) {
			console.log('Error creating the user', error?.message);
		}
	}
	else {
		return userDocRef;
	}
}

// User authentication using email and password
export async function createAuthUserWithEmailAndPassword(email, password) {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password)
}
