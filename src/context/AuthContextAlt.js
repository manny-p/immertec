import {onAuthStateChanged} from 'firebase/auth'
import { createContext, useState, useEffect } from 'react'
import { auth } from '/src/firebase/config'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => onAuthStateChanged(auth, currUser => {
        setIsReady(false)
        setUser(currUser)
        setIsReady(true)
        })
    , [auth])

    return (
        <AuthContext.Provider value={{ user, isReady }}>
            { children }
        </AuthContext.Provider>
    )

}