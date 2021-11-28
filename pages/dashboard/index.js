import * as React from 'react'
import {useCollection} from '/src/hooks/useCollection';

// import data from '/src/data/data.json'
import {useRouter} from 'next/router'
import {Box, Button, Flex, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import {CardWithAvatar} from '@/components/CardWithAvatar'
import {UserInfo} from '@/components/UserInfo'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'

function renderDashboardPage() {

    const {users} = useCollection()
    console.log('Line: 18', users)

    const router = useRouter()

    return (
        <div>
            <Layout
                props={{bg: useColorModeValue('gray.100', 'gray.800')}}
            >
                <Flex justifyContent="end" p="1rem">
                    {users &&
                    users.map(user => {
                            const {isAdmin, id} = user
                            return (
                                <div key={id}>
                                    {isAdmin && <Button mt={4} bg={'#2b908b'} color={'#fff'}>Edit Team Profiles</Button>}
                                </div>
                            )
                        }
                    )
                    }
                </Flex>
                <Box
                    bg={'rgb(174,208,206)'}
                    minH="20vh"
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
                            !users ?
                                <Flex
                                    align="center"
                                    justify="center"
                                    minHeight="15rem"
                                >
                                    <Loader show/>
                                </Flex>
                                :
                                // <SimpleGrid
                                //     columns={{
                                //         base: 1,
                                //         md: 3,
                                //     }}
                                //     spacing="6"
                                // >
                                <Flex
                                    align="center"
                                    justify="center"
                                    wrap="wrap"
                                >
                                    {
                                        users.map(user => {

                                            const url = {
                                                pathname: '/[username]',
                                                query: {username: user.id},
                                            }

                                            const {name, bio, src, isAdmin} = user

                                            return (
                                                <CardWithAvatar
                                                    key={user.id}
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
                                </Flex>
                            // </SimpleGrid>
                        }
                    </Box>
                </Box>
            </Layout>
        </div>
    )
}

export default renderDashboardPage




