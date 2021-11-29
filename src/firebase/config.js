import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAxB8GRSk64vvcp6YEtojgpVj3TjoXCOwo',
    authDomain: 'immertec-c5ec7.firebaseapp.com',
    projectId: 'immertec-c5ec7',
    storageBucket: 'immertec-c5ec7.appspot.com',
    messagingSenderId: '716791695680',
    appId: '1:716791695680:web:db611db90951473782d2a5'
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

export const db = getFirestore()


