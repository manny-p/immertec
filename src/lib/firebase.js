import {initializeApp} from 'firebase/app'
import {getAuth, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import toast from 'react-hot-toast'
import {Button} from '@chakra-ui/react'
import {GoogleLoginButton} from '@/components/GoogleLoginButton';


const firebaseConfig = {
    apiKey: 'AIzaSyAxB8GRSk64vvcp6YEtojgpVj3TjoXCOwo',
    authDomain: 'immertec-c5ec7.firebaseapp.com',
    projectId: 'immertec-c5ec7',
    storageBucket: 'immertec-c5ec7.appspot.com',
    messagingSenderId: '716791695680',
    appId: '1:716791695680:web:db611db90951473782d2a5'
}

const app = initializeApp(firebaseConfig)


// Sign in with Google
export const SignInWithGoogleButton = () => {
    const signInWithGoogle = async () => {
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()

        try {
            await signInWithPopup(auth, provider)
            toast.success('welcome!')
        } catch (err) {
            alert(err.message)
        }
    }
    return (
            <GoogleLoginButton onClick={signInWithGoogle}/>
    )
}

export const SignOutButton = () => {
    const auth = getAuth(app)

    return (
        <Button onClick={() => signOut(auth)}>Sign Out</Button>
    )
}


export const UsernameForm = () => {
    return (
        <>
            <h1>Username Form</h1>
            <input type="text" placeholder="Username"/>
        </>
    )
}


// replace firebase v8 with v9

// import { GoogleAuthProvider } from "firebase/auth"
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'
// import 'firebase/compat/storage'

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
// }

// const provider = new GoogleAuthProvider()

// export const auth = firebase.auth()
// export const firestore = firebase.firestore()
// export const storage = firebase.storage()