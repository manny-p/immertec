import {SignInWithGoogleButton} from '/src/lib/firebase'
import Link from 'next/link'
import Layout from '@/components/Layout'
import {Box, Heading, LightMode, Stack, Text, useColorModeValue} from '@chakra-ui/react'
import SEO from '@/components/SEO'
import {Card} from '@/components/Card'
import CompanyIconLogo from '@/components/CompanyIconLogo'
import GoogleLoginButton from '@/components/GoogleLoginButton'
import Footer from '@/components/Footer';


// import {EmailLoginForm} from '@/components/EmailLoginForm'
// import Image from 'next/image'
// import companyLogo from '@/assets/immertec.png'


export default function Home() {
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
                    mt = "4.2rem"
                        maxW="2xl"
                        mx="auto"
                        textAlign="center"
                    >
                        <Stack maxW="xs" mx="auto" spacing="8">
                            <CompanyIconLogo
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

                            <LightMode>
                                <SignInWithGoogleButton
                                    link={{
                                        href: `/dashboard`
                                    }}
                                />
                            </LightMode>
                            {/*<EmailLoginForm onSubmit={(e) => e.preventDefault()} />*/}
                            <Box fontSize="sm">
                                <Text fontWeight="medium" color={useColorModeValue('gray.600', 'gray.400')}>
                                    Already have an account?
                                </Text>
                                <Link href="/login" fontWeight="semibold"
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
