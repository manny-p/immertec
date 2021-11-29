import {Button, chakra, FormControl, FormLabel, Input, Stack} from '@chakra-ui/react'
import {PasswordField} from '@/components/shared/PasswordField'
import {useEffect, useState} from 'react'
import {useSignup} from '@/hooks/useSignup'
import {useAuthContext} from '@/hooks/useAuthContext';
import {useRouter} from 'next/router'

import toast from 'react-hot-toast';
import Loader from '@/components/shared/Loader'
import {useCollection} from '@/hooks/useCollection';
import {auth, db} from '/src/firebase/config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';


export const EmailLoginFormAlt = () => {

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
                const res = await signInWithEmailAndPassword(auth, email, password)
                router.replace(`/dashboard/${res.user.uid}`)


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
                        width="25rem"
                    />
                </FormControl>
                <PasswordField props={{
                    onChange: e => setPassword(e.target.value),
                    value: password,
                }}
                />
                <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                    Sign In
                </Button>
            </Stack>
            {error && <div>{error.message}</div>}
        </chakra.form>

    )
}
