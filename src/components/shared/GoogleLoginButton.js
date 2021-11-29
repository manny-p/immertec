import {Button} from '@chakra-ui/react'
import {FaGoogle} from 'react-icons/fa'

const GoogleLoginButton = ({onClick, props}) => {
    return (
        <Button
            onClick={onClick}
            fontSize="sm"
            fontWeight="bold"
            size="lg"
            leftIcon={<FaGoogle fontSize="18px"/>}
            iconSpacing="3"
            colorScheme="red"
            width="full"
            {...props}
        >
            Continue with Google
        </Button>
    )
}

export default GoogleLoginButton

