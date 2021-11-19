import {Button} from '@chakra-ui/react';
import styles from '@/styles/Header.module.scss';

export default function RenderLoginPage() {

    return (
        <>
            <h1>Login Page</h1>

            <Button
                // onClick={handleSignIn}
                className={styles.login}
                bg="steelblue"
                color="white"
                size="sm"
                _hover={{
                    bg: '#3b6cb3c9',
                    color: 'white',
                }}
            >
                Login
            </Button>
        </>
    )
}