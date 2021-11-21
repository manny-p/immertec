import styles from '@/styles/Header.module.scss'
import Navbar from '@/components/Navbar';

const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar/>
        </header>
    )
}

export default Header
