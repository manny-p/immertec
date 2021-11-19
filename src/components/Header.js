import styles from '@/styles/Header.module.scss'
import Navbar from '@/components/Navbar'

import Link from 'next/link'
import {Box, Button} from '@chakra-ui/react'
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Header = () => {
    // noinspection JSUnresolvedVariable
    return (
        <>
            <header className={styles.header}>
                <Navbar/>
            </header>
        </>
    )
}

export default Header