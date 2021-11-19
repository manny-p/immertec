import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import {Toaster} from 'react-hot-toast'
import UserProvider from '../src/lib/context';


function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider>
            <UserProvider>
                <Component {...pageProps} />
                <Toaster/>
            </UserProvider>
        </ChakraProvider>
    )
}

export default MyApp
