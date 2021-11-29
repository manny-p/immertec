import {Box, Flex, Heading, HStack, Text, useColorModeValue as mode} from '@chakra-ui/react'
import SEO from '@/components/layout/SEO'
import GoogleLoginButton from '@/components/shared/GoogleLoginButton';

import {EmailLoginFormAlt} from '@/components/login/EmailLoginFormAlt';

export default function RenderLoginPage() {

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
                                <EmailLoginFormAlt />
                                {/*<GoogleLoginButton/>*/}
                            </HStack>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}


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
// const user = true
// const username = true

/** @param case3 */
// if user is signed out then show <SignInWithGoogleButton/>
// const user = null
// const username = null