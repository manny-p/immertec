import { Button } from '@chakra-ui/react'
import { FaGoogle } from 'react-icons/fa'

export const GoogleLoginButton = (props) => (
    <Button
        fontSize="sm"
        fontWeight="bold"
        size="lg"
        leftIcon={<FaGoogle fontSize="18px" />}
        iconSpacing="3"
        colorScheme="red"
        width="full"
        {...props}
    >
        Continue with Google
    </Button>
)