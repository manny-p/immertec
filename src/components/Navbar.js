import styles from '@/styles/Navbar.module.scss';
import {Button} from '@chakra-ui/react';
import Link from 'next/link';
import NavbarLogo from '@/components/NavbarLogo';


const Navbar = () => {

    /** @param case2 */
    // if user signed in and has username then show <SignOutButton/>
    // const user = true
    // const username = true

    /** @param case3 */
        // if user is signed out then show <SignInButton/>
    const user = null
    const username = null
    
    return (
        <nav className={styles.nav}>
            <ul style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                listStyle: 'none',
            }}>
                <li className={styles.li}>
                    <Link href="/" passHref>
                        <NavbarLogo
                            height={100}
                            width={150}
                            props={{
                                objectFit: 'contain'
                            }}/>
                    </Link>
                </li>

                {/* a user is signed in and has username */}
                {username && (
                    <>
                        <li>
                            <Link href="/admin" passHref>
                                <Button
                                    bg="steelblue"
                                    color="white"
                                    size="sm"
                                    _hover={{
                                        bg: '#3b6cb3c9',
                                        color: 'white',
                                    }}
                                >
                                    Edit Team Profiles
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL} alt={'avatar'}/>
                            </Link>
                        </li>
                    </>
                )}

                {/* user is not signed in OR has not created username */}
                {!username && (
                    <>
                        <li>
                            <Link href="/login" passHref>
                                <Button
                                    className={styles.login}
                                    bg="steelblue"
                                    color="white"
                                    size="sm"
                                    _hover={{
                                        bg: '#634ab3',
                                        color: 'white',
                                    }}
                                >
                                    Login
                                </Button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar