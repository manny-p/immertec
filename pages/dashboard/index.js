import * as React from 'react'
import Link from 'next/Link'
import {useRouter} from 'next/router'
import {Box, Button, Flex, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import {CardWithAvatar} from '@/components/CardWithAvatar'
import {UserInfo} from '@/components/UserInfo'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import data from '../../src/data/data.json'

function renderDashboardPage() {

    const router = useRouter()

    console.log('() => renderDashboardPage, Line 15'
        , router)

    // let data

    // permissions
    // const isAdmin = false
    const isAdmin = true

    // const hasUsername = true

    // const username = {}
    // username.id = 90324

    const username = {
        id: 90324
    }

    const {id} = username
    // console.log('() => renderDashboardPage, Line 34'
    //     , id)


    return (
        <div>
            <Layout
                // props={{bg: useColorModeValue('gray.100', 'gray.800')}}
                props={{bg: '#a04a4a'}}
            >
                <Box
                    bg={useColorModeValue('gray.100', 'gray.800')}
                    px={{
                        base: '6',
                        md: '8',
                    }}
                    py="12"
                >
                    <Flex
                        direction="column"
                        align="center"
                        rounded="md"
                        padding="8"
                    >

                        {/*Todo: add error handling for no user found, redirect to login page with alert*/}

                        <h1>{`Logged in as user id: ${username.id}`}</h1>

                        {/*add condition rendering for users and admins */}

                        {
                            !isAdmin ?
                                <h1>{`Access Type: User`}</h1>
                                :
                                <>
                                    <h1>{`Access Type: Admin`}</h1>
                                    <Button
                                        mt={4}
                                        bg={'#2b908b'}
                                        color={'#fff'}
                                    >
                                        Edit Team Profiles
                                    </Button>
                                </>
                        }

                    </Flex>
                </Box>
                <Box
                    bg={'rgba(190,134,38,0.93)'}
                >
                    <Box
                        as="section"
                        maxW={{
                            base: 'xs',
                            md: '3xl',
                        }}
                        mx="auto"
                    >
                        {
                            !data ?
                                <Flex
                                    align="center"
                                    justify="center"
                                    minHeight="15rem"
                                >
                                    <Loader show/>
                                </Flex>
                                :
                                <SimpleGrid
                                    columns={{
                                        base: 1,
                                        md: 3,
                                    }}
                                    spacing="6"
                                >
                                    {
                                        data.map((user) => {
                                            const url = {
                                                pathname: '/[username]',
                                                query: {username: id},
                                            }
                                            const {name, bio, src, isAdmin} = user


                                            return (
                                                <CardWithAvatar
                                                    key={name}
                                                    avatarProps={{
                                                        src,
                                                        name,
                                                    }}
                                                >
                                                    <UserInfo mt="3" name={name} bio={bio} isAdmin={isAdmin}/>


                                                    <Button
                                                        onClick={() => {
                                                            router.push(url)
                                                        }}

                                                        // router.push({
                                                        //     pathname: '/[username]',
                                                        //     query: {username: id},
                                                        // })

                                                        variant="outline"
                                                        colorScheme="blue"
                                                        rounded="full"
                                                        size="sm"
                                                        width="full"
                                                    >
                                                            View Profile
                                                    </Button>

                                                </CardWithAvatar>
                                            )
                                        })
                                    }
                                </SimpleGrid>
                        }
                    </Box>
                </Box>
            </Layout>
        </div>
    )
}

export default renderDashboardPage


// const users = [
// {

//         isAdmin: false,
//         id: 7438734
//     },
//     {
//         isAdmin: false,
//         id: 6394001
//     }
// ]

// <Loader show
// props={{mt:'5rem'}}
// />
//
// {!isAdmin ?
//     isUser &&
//     <>
//         <h1>Access Type: User</h1>
//         <h1>{`User ID: ${username.id}`}</h1>
//     </>
//     :
//     <>
//         <h1>Access Type: Admin</h1>
//
//         <Button>Edit Team Profiles</Button>
//
//     </>
// }
