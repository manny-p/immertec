import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import {Toaster} from 'react-hot-toast'
import UserProvider from '/src/context/authcontext'
import Header from '@/components/layout/Header';

function MyApp({Component, pageProps}) {
    return (
        <UserProvider>
            <ChakraProvider>
                <Header/>
                <Component {...pageProps} />
                <Toaster/>
            </ChakraProvider>
        </UserProvider>
    )
}

export default MyApp
