import styles from '@/styles/Header.module.scss';
import {Button} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image'
import logo from '@/assets/immertec.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {app} from '../lib/firebase'


const Navbar = () => {
    const user = null
    const username = null

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    {/*Sign in with Google*/}
    const handleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider)
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.navGridLeft}>
                <ul>
                    <li style={{paddingTop: '.35rem'}}>
                        <Link href="/" passHref>
                            <Image
                                src={logo}
                                alt="Immertec"
                                height={100}
                                width={150}
                                objectFit={'contain'}
                            />
                        </Link>
                    </li>
                    <li>
                        Item 1
                    </li>
                    <li>
                        Item 2
                    </li>
                </ul>
            </div>
            <div className={styles.navGridRight}>
                <ul>
                    <li>
                        <Link href="/login" passHref>
                            <a>
                                <Button
                                    onClick={handleSignIn}
                                    className={styles.login}
                                    bg="steelblue"
                                    color="white"
                                    size="sm"
                                    _hover={{
                                        bg: '#3b6cb3c9',
                                        color: 'white',
                                    }}
                                >
                                    Login
                                </Button>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser} height={24}/>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar