import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import {Toaster} from 'react-hot-toast'
import UserProvider from '../src/lib/context';
import Header from '@/components/Header';

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider>
            <UserProvider>
                <Header/>
                <Component {...pageProps} />
                <Toaster/>
            </UserProvider>
        </ChakraProvider>
    )
}

export default MyApp
