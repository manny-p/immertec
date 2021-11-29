import {useRouter} from 'next/router'
import {useCollection} from '@/hooks/useCollection'
import Loader from '@/components/shared/Loader'
import {CardWithAvatar} from '@/components/dashboard/CardWithAvatar'
import {UserInfo} from '@/components/dashboard/UserInfo'
import CustomButton from '@/components/shared/CustomButton'
import Container from '@/components/layout/Container'
import Sidebar from '@/components/sidebar/Sidebar'
import {Box, Button, Flex, Stack, SimpleGrid, useColorModeValue} from '@chakra-ui/react'


export default function RenderUserDashboard() {

    const {users} = useCollection('users')
    const router = useRouter()

    const loggedInAsUser = router.query?.slug

    const permissions = {
        a: 'Admin',
        u: 'User',
    }


    return (
        <Sidebar>
            <Box>
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
                                        <h1><strong>Logged In As:</strong> {loggedInAsUser}</h1>
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
                        <Box>
                            <Flex
                                mt="30vh"
                                align="center"
                                justify="center"
                            >
                                <Loader show/>
                            </Flex>
                        </Box>
                        :
                        <Box>
                            <Stack
                                direction="row"
                                align="center"
                                justify={'center'}
                                mt={2}
                                spacing="6"
                                width={'100%'}
                                wrap={'wrap'}
                            >
                                {
                                    users &&
                                    users.map(user => {

                                        const url = {
                                            pathname: '/userID/[slug]',
                                            query: {slug: user.id},
                                        }

                                        const {bio, isAdmin, email, name='name', src} = user

                                        return (

                                            <CardWithAvatar
                                                mt="2rem"
                                                mb="2rem"
                                                key={user.id}
                                                avatarProps={{
                                                    name,
                                                    src,
                                                }}
                                            >
                                                <UserInfo mt="3" email={email} name={name} bio={bio} isAdmin={isAdmin}/>

                                                <Button
                                                    onClick={() => {
                                                        router.push(url)
                                                    }}
                                                    mt={1}
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
            </Box>
        </Sidebar>
    )
}
