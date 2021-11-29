import {Button, chakra, FormControl, FormLabel, Input, Stack} from '@chakra-ui/react'
import {PasswordField} from './PasswordField'
import {useEffect, useState} from 'react'
import {useSignup} from '@/hooks/useSignup'
import {useAuthContext} from '@/hooks/useAuthContext';
import {useRouter} from 'next/router'

import toast from 'react-hot-toast';
import Loader from '@/components/shared/Loader'
import {useCollection} from '@/hooks/useCollection';
import {auth, db} from '/src/firebase/config'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';



export const EmailLoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, signup} = useSignup()
    const {user} = useAuthContext()
    const {users} = useCollection('users')
    const router = useRouter()


    // useEffect(() => {
    //     console.log('Line: 21')
    //
    //     if (user) router.replace(`/dashboard/${user?.uid}`)
    //
    //     return () => console.log('unmount')
    //
    // }, [user]);

    return (
        <chakra.form
            onSubmit={async e => {
                e.preventDefault()

                console.log('You clicked submit.')
                // TODO add logic
                // await signup(email, password)
                const res = await createUserWithEmailAndPassword(auth, email, password)
                const usr = res.user
                await setDoc(doc(db, 'users', res.user.uid), {
                    email: usr.email,
                    name: usr.displayName,
                    bio: "",
                    isAdmin: false
                })

                router.replace(`/dashboard/${res.user.uid}`)

                // if (users) {
                //     users.map(user => {
                //         const url = {
                //             pathname: '/dashboard/[slug]',
                //             query: {slug: user.id}
                //         }
                //         return router.push(url)
                //     })
                // }

                //
                // await router.replace(`/dashboard/${user?.uid}`)
                // // await router.push(`/dashboard/${user?.uid}`)

                setTimeout(() => {
                    toast.success('welcome!')
                }, 750)
            }}
        >
            <Stack spacing="6">
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                    />
                </FormControl>
                <PasswordField props={{
                    onChange: e => setPassword(e.target.value),
                    value: password,
                }}
                />
                <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                    Create Account
                </Button>
            </Stack>
            {error && <div>{error.message}</div>}
        </chakra.form>

    )
}
