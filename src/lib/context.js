import {createContext, useState} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {app} from './firebase'

export const UserContext = createContext(null)

const UserProvider = ({children}) => {

    const [user, setUser] = useState()

    // call firebase to check user auth state
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => setUser(user))


    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

