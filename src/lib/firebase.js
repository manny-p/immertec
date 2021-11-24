import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import toast from 'react-hot-toast'
import {Button} from '@chakra-ui/react'
import GoogleLoginButton from '@/components/GoogleLoginButton';


const firebaseConfig = {
    apiKey: 'AIzaSyAxB8GRSk64vvcp6YEtojgpVj3TjoXCOwo',
    authDomain: 'immertec-c5ec7.firebaseapp.com',
    projectId: 'immertec-c5ec7',
    storageBucket: 'immertec-c5ec7.appspot.com',
    messagingSenderId: '716791695680',
    appId: '1:716791695680:web:db611db90951473782d2a5'
}

export const app = initializeApp(firebaseConfig)

const db = getFirestore()

console.log('Line: 22', db)

export {db}


// Sign in with Google
export const SignInWithGoogleButton = ({link}) => {
    const handleGoogleAuth = async () => {
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
        <GoogleLoginButton link={link} onClick={handleGoogleAuth}/>
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
