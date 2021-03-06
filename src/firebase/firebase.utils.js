import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAzwyi8mPHnAf5zqgYMH0PbyUh1DLjLYFk",
    authDomain: "e-commerce-8dc0f.firebaseapp.com",
    databaseURL: "https://e-commerce-8dc0f.firebaseio.com",
    projectId: "e-commerce-8dc0f",
    storageBucket: "e-commerce-8dc0f.appspot.com",
    messagingSenderId: "711472693052",
    appId: "1:711472693052:web:bfe659d0b8be2f6d08a839"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase