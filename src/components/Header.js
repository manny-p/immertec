import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {Box, Button, Flex} from '@chakra-ui/react'
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Header = () => {
    // noinspection JSUnresolvedVariable
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.navGridLeft}>
                        <ul>
                            <li>
                                <div className={styles.innerContainer}>
                                    <Box className={styles.innerContainerLogo}>
                                        <Link href="/" passHref>
                                            <a>
                                                <FontAwesomeIcon icon={faCircle} className={styles.logoClass}
                                                                 id={styles.logoId}/>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box className={styles.innerContainerName}>
                                        Immertec
                                    </Box>

                                </div>
                            </li>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a target="_blank" href="/" rel="noreferrer">
                                <li>
                                    Item 1
                                </li>
                            </a>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a target="_blank" href="/" rel="noreferrer">
                                <li>
                                    Item 2
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className={styles.navGridRight}>
                        <ul>
                            <li>
                                <Link href="/" passHref>
                                    <a>
                                        <Button
                                            className={styles.loginButton}
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
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header