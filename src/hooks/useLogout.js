import {useAuthContext} from '/src/hooks/useAuthContext'
import {auth} from '/src/firebase/config'
import {signOut} from 'firebase/auth'

export const useSignout = () => {
    const {dispatch} = useAuthContext()

    const logout = () => {
        signOut(auth)
            .then(() => {
                dispatch({type: 'LOGOUT'})
                console.log('user has logged out')
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return {logout}
}



