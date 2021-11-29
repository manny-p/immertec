import {onAuthStateChanged} from 'firebase/auth'
import {createContext, useReducer, useEffect, useDebugValue} from 'react'
import { auth } from '/src/firebase/config'

export const AuthContext = createContext(null)

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'AUTH_IS_READY':
            return {user: action.payload, authIsReady: true }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    })

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            dispatch({ type: 'AUTH_IS_READY', payload: user })
            unsub()
        })
    }, [])

    useDebugValue(state ?? 'loading...')

    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )

}