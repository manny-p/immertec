import {Box, Button, Flex, Stack, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {useCollectionRealTime} from '@/hooks/useCollectionRealTime'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import {CardWithAvatar} from '@/components/dashboard/CardWithAvatar'
import {UserInfo} from '@/components/dashboard/UserInfo'
import CustomButton from '@/components/CustomButton'
import Container from '@/components/Container'
import Sidebar from '@/components/sidebar/Sidebar';
// import {useCollection} from '@/hooks/useCollection'


export default function renderUserDashboard() {
    let {users} = useCollectionRealTime('users')
    let router = useRouter()

    const loggedInAsUser = router.query?.slug

    const permissions = {
        a: 'Admin',
        u: 'User',
    }

    return (
        <Sidebar>
            {
                users &&
                users.map(({id, isAdmin}) => {
                    if (isAdmin && id === loggedInAsUser) {
                        return (
                            <Box key={id}>
                                <Flex
                                    marginTop="1.5rem"
                                    justify="space-around"
                                    align="center"
                                    p="1rem"

                                >
                                    <h1><strong>Logged In As:</strong>  {loggedInAsUser}</h1>
                                    <h1><strong>Permissions:</strong> {permissions.a}</h1>
                                    <CustomButton fontSize="1rem" size="sm"
                                                  rest={{bg: '#2c908b', color: 'white'}}
                                                  hover={{bg: '#2F68A9FF'}}
                                    > Edit Team Profiles
                                    </CustomButton>
                                </Flex>
                            </Box>
                        )
                    } else if (!isAdmin && id === loggedInAsUser) {
                        return (
                            <Box key={id}>
                                <Flex
                                    marginTop="1.5rem"
                                    justify="space-around"
                                    align="center"
                                >
                                    <h1><strong>Logged In As:</strong> {loggedInAsUser}</h1>
                                    <h1><strong>Permissions:</strong> {permissions.u}</h1>
                                </Flex>
                            </Box>
                        )
                    }
                })
            }
            {
                !users ?
                    <Container
                        boxProps={{
                            mt: '30vh',
                            minHeight: '15rem'
                        }}
                        flexProps={{
                            align: 'center',
                            justify: 'center',
                        }}

                    >
                        <Loader show/>
                    </Container>
                    :
                    <Box>
                        <Stack
                            direction="row"
                            align="center"
                            justify={'center'}
                            mt={2}
                            spacing="6"
                            width={'100%'}
                        >
                            {
                                users &&
                                users.map(user => {

                                    const url = {
                                        pathname: '/userID/[slug]',
                                        query: {slug: user.id},
                                    }

                                    const {name, bio, src, isAdmin} = user

                                    return (

                                        <CardWithAvatar
                                            mt="2rem"
                                            mb="2rem"
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
                        </Stack>
                    </Box>

            }
        </Sidebar>
    )
}
