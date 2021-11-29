import styles from '@/styles/Navbar.module.scss'
import {Box, Button, Flex, useColorModeValue} from '@chakra-ui/react'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import NavbarLogo from '@/components/layout/NavbarLogo'
import {useCollection} from '@/hooks/useCollection';
import {useRouter} from 'next/router';
import CustomButton from '@/components/shared/CustomButton';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase/config'


import {useLogout} from '@/hooks/useLogout'


const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(null)
    const {users} = useCollection('users')
    const router = useRouter()

    // const {logout} = useLogout()
    useEffect(() => {
        setLoggedIn(router.query?.slug)
    }, [router.query?.slug])

    // const loggedInAsUser = router.query?.slug
    /** @param case2 */
    // if user signed in and has username then show <SignOutButton/>
    // const user = true
    // const username = true

    /** @param case3 */
    // if user is signed out then show <SignInButton/>
    // const user = null
    // const username = null

    return (

        <nav className={styles.nav}>
            <ul style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                listStyle: 'none',
            }}>
                <li>
                    <Link href="/" passHref>
                        <NavbarLogo
                            height={100}
                            width={150}
                            props={{
                                objectFit: 'contain'
                            }}/>
                    </Link>
                </li>

                <li>
                    {
                        users && loggedIn &&
                        users.map(({id}) => {
                            if (id === loggedIn) {
                                return (
                                    <CustomButton key={id} fontSize="1rem" size="sm"
                                                  rest={{bg: '#2c908b', color: 'white'}}
                                                  hover={{bg: '#2F68A9FF'}}
                                                  onClick={() => {
                                                      signOut(auth)
                                                      setLoggedIn(null)
                                                      router.push("/")
                                                  }}
                                    > Log Out
                                    </CustomButton>

                                )
                            }
                        })
                    }

                    {
                        !loggedIn && (
                            <Link href={'/login'} passHref>
                                <CustomButton fontSize="1rem" size="sm"
                                              rest={{bg: '#2c908b', color: 'white'}}
                                              hover={{bg: '#2F68A9FF'}}> Log In
                                </CustomButton>
                            </Link>
                        )

                    }
                </li>

            </ul>
        </nav>

    )
}

export default Navbar