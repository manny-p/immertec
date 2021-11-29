import { useContext } from "react"
import { AuthContext } from "/src/context/AuthContext"

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('useAuthContext needs to be nested inside AuthContextProvider')
    }

    return context
}