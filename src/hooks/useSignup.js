import {useState} from 'react'
import {auth, db} from '/src/firebase/config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useAuthContext} from '/src/hooks/useAuthContext'
import {setDoc, doc} from 'firebase/firestore'
export const useSignup = () => {
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    const signup = async (email, password) => {
        console.log('hit signup')
        try {
            setError(null)
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log("line 15:", res.user)
            await setDoc(doc(db, "users", res.user.uid),{
                email: user.email,
                displayName: user.displayName,
                avatar: user.photoURL,
                isAdmin: false,
                bio: ""
            })
            console.log('user has signed up', res, "USER: ", user)
        } catch (error) {
            setError(error)
        }

        console.log('Line: 27', email, password)

    }
    
    return {error, signup}
}




