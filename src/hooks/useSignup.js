import {useState} from 'react'

import {auth} from '/src/firebase/config'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export const useSignup = () => {
    const [error, setError] = useState(null)

    const signup = (email, password) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => console.log('user signed up:', res.user))
            .catch(e => setError(e.message))
        return {error, signup}
    }
}