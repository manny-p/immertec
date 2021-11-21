import {Box} from '@chakra-ui/react'

const Layout = ({opacity, zIndex, props, children}) => {
    return (
        <Box
            opacity={opacity}
            zIndex={zIndex}
            minHeight={'90vh'}
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

