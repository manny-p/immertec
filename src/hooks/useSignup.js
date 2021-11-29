import {useState} from 'react'
import {auth} from '/src/firebase/config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useAuthContext} from '/src/hooks/useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const {dispatch} = useAuthContext()


    const signup = (email, password) => {
        setError(null)

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log('user has signed up', res.user)
                dispatch({type: 'LOGIN', payload: res.user})
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return {error, signup}
}



