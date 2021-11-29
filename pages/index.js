import {useState} from 'react'
import {useSignup} from '@/hooks/useSignup'
import Link from 'next/link'
import {Box, Heading, LightMode, Stack, Text, useColorModeValue, VisuallyHidden} from '@chakra-ui/react'
import Layout from '@/components/layout/Layout'
import SEO from '@/components/layout/SEO'
import {Card} from '@/components/shared/Card'
import CompanyLogo from '@/components/shared/CompanyIconLogo'
import Footer from '@/components/layout/Footer'
import {EmailLoginForm} from '@/components/shared/EmailLoginForm'
import {ContinueWithGoogle} from '@/components/shared/ContinueWithGoogle'
import {DividerWithText} from '@/components/shared/DividerWithText';


export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, signup} = useSignup()

    return (
        <>
            <SEO title={'Home'}/>
            <Layout>
                <Box
                    as="section"
                    bgGradient={{
                        md: 'linear(to-r, teal.600, purple.600)',
                    }}
                    py="20"
                    minHeight={'85vh'}
                >
                    <Card
                        mt="4.2rem"
                        maxW="2xl"
                        mx="auto"
                        textAlign="center"
                    >
                        <Stack maxW="xs" mx="auto" spacing="8">
                            <CompanyLogo
                                height={50}
                                props={{objectFit: 'contain'}}/>
                            <Stack spacing="3">
                                <Heading as="h1" letterSpacing="tight">
                                    Real-Time Virtual Surgery Training
                                </Heading>
                                <Text fontWeight="medium" color={useColorModeValue('gray.600', 'gray.400')}>
                                    Sign up today!
                                </Text>
                            </Stack>


                            <EmailLoginForm onSubmit={(e) => e.preventDefault()}/>

                            <LightMode>
                            <DividerWithText mt="6">or continue with</DividerWithText>
                                <VisuallyHidden>Login with Google</VisuallyHidden>
                                <ContinueWithGoogle/>
                            </LightMode>

                            <Box fontSize="sm">
                                <Text fontWeight="medium" color={useColorModeValue('gray.600', 'gray.400')}>
                                    Already have an account?
                                </Text>
                                <Link href={"/login"} fontWeight="semibold"
                                      color={useColorModeValue('teal.600', 'teal.300')}>
                                    Log back in
                                </Link>
                            </Box>
                        </Stack>
                        <Text
                            mt="16"
                            fontSize="xs"
                            mx="auto"
                            maxW="md"
                            color={useColorModeValue('gray.600', 'gray.400')}
                        >
                            By continuing, you acknowledge that you have read, understood, and agree to our terms and
                            condition
                        </Text>
                    </Card>
                </Box>
                <Footer/>
            </Layout>
        </>
    )
}
