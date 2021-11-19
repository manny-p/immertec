import Head from 'next/head'
import styles from '@/styles/Layout.module.scss'
import Header from '@/components/Header'

const Layout = ({title, description, keywords, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <link rel="icon" href={'/favicon.ico'}/>

            </Head>

            <main className={styles.layoutContainer}>
                <Header/>
                <div>
                    {children}
                </div>
            </main>
        </>
    )
}

Layout.defaultProps = {
    title: 'Immertec',
    description: 'Immertec Coding Challenge',
    keywords: 'Immertec Real-Time Virtual Surgery Training'
}

export default Layout