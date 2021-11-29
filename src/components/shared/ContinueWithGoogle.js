import {useRouter} from 'next/router'
import {signInWithPopup} from 'firebase/auth'
import {auth, provider} from 'src/firebase/config'
import toast from 'react-hot-toast'
import GoogleLoginButton from '@/components/shared/GoogleLoginButton'

import {useCollection} from '@/hooks/useCollection'


export const ContinueWithGoogle = () => {

    const {users} = useCollection('users')
    const router = useRouter()

// Sign in with Google
    const handleClick = async () => {
        try {
            await signInWithPopup(auth, provider)

            if (users) {
                users.map(user => {
                    const url = {
                        pathname: '/dashboard/[slug]',
                        query: {slug: user.id}
                    }
                    return router.push(url)
                })
            }
            setTimeout(() => {
                toast.success('welcome!')
            }, 750)

        } catch (err) {
            alert(err.message)
        }
    }
    return (
        <GoogleLoginButton onClick={handleClick}/>
    )
}


//
//
// import {useContext, useEffect, useState} from 'react'
// import {useRouter} from 'next/router'
// import {UserContext} from 'src/lib/context'
// import {signInWithPopup} from 'firebase/auth'
// import {auth, provider} from 'src/firebase/config'
// import toast from 'react-hot-toast'
// import GoogleLoginButton from '@/components/GoogleLoginButton'
// import Link from 'next/link'
//
//
// export const ContinueWithGoogle = () => {
//
//     const {user} = useContext(UserContext)
//     const [route, setRoute] = useState()
//     const router = useRouter()
//
// // Sign in with Google
//     const handleClick = async () => {
//
//         const pushDash = router.push('/dashboard')
//         const pushHome = router.push('/')
//
//         try {
//             await signInWithPopup(auth, provider)
//             if (user) {
//                 const path = await pushDash
//                 setRoute(path)
//             } else {
//                 const path = await pushHome
//                 setRoute(path)
//             }
//         } catch (err) {
//             alert(err.message)
//         }
//         toast.success('welcome!')
//         return route
//     }
//
//
//     useEffect(() => {
//         const trigger = async () => {
//             await handleClick
//         }
//         trigger()
//     }, [user])
//
//
//
//     return (
//         <GoogleLoginButton href={route} onClick={handleClick}/>
//     )
// }