import {Box} from '@chakra-ui/react'
import Footer from '@/components/layout/Footer'

const Layout = ({opacity, zIndex, props, children}) => {
    return (
        <Box
            opacity={opacity}
            zIndex={zIndex}
            minHeight={'100vh'}
            display={'flex'}
            flexDirection={'column'}
            width={'100vw'}
            {...props}
        >
            {children}
        </Box>
    )
}
export default Layout

