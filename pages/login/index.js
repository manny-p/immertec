import {Box, Flex, Heading, HStack, Text, useColorModeValue as mode} from '@chakra-ui/react'
import {SignInWithGoogleButton, SignOutButton, UsernameForm} from '../../src/lib/firebase'
import SEO from '@/components/SEO'
// import Layout from '@/components/Layout'


export default function RenderLoginPage() {

    // {user ?
    //     username && <SignOutButton/>
    //     :
    //     <SignInWithGoogleButton/>
    // }

    /** @param case1 */
    // if user signed in but missing username then show <UsernameForm/>
    // const user = true
    // const username = null

    /** @param case2 */
    // if user signed in and has username then show <SignOutButton/>
    const user = true
    const username = true

    /** @param case3 */
        // if user is signed out then show <SignInWithGoogleButton/>
    // const user = null
    // const username = null

    return (
        <>
            <SEO title={'login'}/>
            <Flex
                minH="100vh"
                direction={{
                    base: 'column',
                    md: 'row',
                }}
            >
                <Box
                    display={{
                        base: 'none',
                        md: 'block',
                    }}
                    maxW={{
                        base: '20rem',
                        lg: '40rem',
                    }}
                    flex="1"
                    bg="blue.600"
                    color="white"
                    px="10"
                    py="8"
                >
                </Box>
                <Box
                    flex="1"
                    px={{
                        base: '6',
                        md: '10',
                        lg: '16',
                        xl: '28',
                    }}
                    py={{
                        base: '10',
                        md: '64',
                    }}
                    bg={{
                        md: mode('gray.50', 'gray.800'),
                    }}
                >
                    <Box maxW="xl">
                        <Box>
                            <Box
                                display={{
                                    md: 'none',
                                }}
                                mb="16"
                            >
                            </Box>
                            <Heading
                                color={mode('blue.600', 'blue.400')}
                                as="h1"
                                size="2xl"
                                fontWeight="extrabold"
                                letterSpacing="tight"
                            >
                                Welcome back

                            </Heading>
                            <Text
                                mt="3"
                                fontSize={{
                                    base: 'xl',
                                    md: '3xl',
                                }}
                                fontWeight="bold"
                                color={mode('gray.500', 'inherit')}
                            >
                                Sign in to continue
                            </Text>
                        </Box>
                        <Box
                            minW={{
                                md: '420px',
                            }}
                            mt="10"
                            rounded="xl"
                            bg={{
                                md: mode('white', 'gray.700'),
                            }}
                            shadow={{
                                md: 'lg',
                            }}
                            px={{
                                md: '10',
                            }}
                            pt={{
                                base: '8',
                                md: '12',
                            }}
                            pb="8"
                        >

                            <HStack
                                mt="5"
                                mb="10"
                            >

                                {/*{user ?*/}
                                {/*    !username && <UsernameForm/> // if user signed in but missing username then show <UsernameForm/>*/}
                                {/*    :*/}
                                {/*    <SignInWithGoogleButton/> // otherwise no user and show Sign In*/}
                                {/*}*/}

                                {/* (Logical AND) && */}
                                {/* sign out */}
                                {/*{user &&*/}
                                {/*username && <SignOutButton/>*/}
                                {/*}*/}

                                {user ?
                                    username && <SignOutButton/>
                                    :
                                    <SignInWithGoogleButton/>
                                }

                                {/*{user ?*/}
                                {/*    !username ? // case1 - if user signed in but missing username then show <UsernameForm/>*/}
                                {/*        <UsernameForm/>*/}
                                {/*        : // case2 - if user signed in and has username then show <SignOutButton/>*/}
                                {/*        <SignOutButton/>*/}
                                {/*    : // case3 - if user is signed out then show <SignInButton/>*/}
                                {/*    <SignInWithGoogleButton/>*/}
                                {/*}*/}
                            </HStack>

                            {/*<SigninForm/>*/}

                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}


// import {Button} from '@chakra-ui/react'
// import Image from 'next/image'
// import styles from '@/styles/Header.module.scss'
// import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// import toast from 'react-hot-toast'
// import logo from '@/assets/immertec.png'

// <Button
//     // onClick={handleSignIn}
//     className={styles.login}
//     bg="steelblue"
//     color="white"
//     size="sm"
//     _hover={{
//         bg: '#3b6cb3c9',
//         color: 'white',
//     }}
// >
//     Login
// </Button>