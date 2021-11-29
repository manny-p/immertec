import {Box} from '@chakra-ui/react'

const Container = ({children, props}) => {
    return (
        <Box
            minHeight={'100vh'}
            width={'100vw'}
            display={'flex'}
            flexDirection="column"
            {...props}
        >
            {children}
        </Box>
    )
}

export default Container