import * as React from 'react'
import Link from 'next/Link'
import {Button} from '@chakra-ui/react'
import {FaGoogle} from 'react-icons/fa'

const GoogleLoginButton = React.forwardRef(({href, onClick, props, link}, ref) => {
    return (
        <>
            {link &&
            <Link {...link} passHref>
                <a href={href} onClick={onClick} ref={ref}>
                    <Button
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
                </a>
            </Link>
            }
        </>
    )
})

export default GoogleLoginButton


