import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import {Toaster} from 'react-hot-toast'
import Header from '@/components/layout/Header';
import {AuthContextProvider} from '/src/context/AuthContext';

function MyApp({Component, pageProps}) {
    return (
        <AuthContextProvider>
            <ChakraProvider>
                <Header/>
                <Component {...pageProps} />
                <Toaster/>
            </ChakraProvider>
        </AuthContextProvider>

    )
}

export default MyApp
