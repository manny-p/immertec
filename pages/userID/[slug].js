import {useRouter} from 'next/router'
import {Box, Button, Flex, Heading, Icon, Text, useColorModeValue} from '@chakra-ui/react'
import {CardWithAvatar} from '@/components/userID/CardWithAvatar'
import {UserInfo} from '@/components/userID/UserInfo'
import {CardContent} from '@/components/userID/CardContent'
import {HiPencilAlt} from 'react-icons/hi'

import Layout from '@/components/layout/Layout'
import Loader from '@/components/shared/Loader'
import faker from 'faker'
import {useCollection} from '@/hooks/useCollection';


export default function RenderUserIdProfilePage() {
    const {users} = useCollection('users')
    const router = useRouter()
    const userID = router.query?.slug

    console.log('Line: 20', faker)

    return (
        <Layout>


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
                    <Flex
                        align="center"
                        justify="center"
                        wrap="wrap"
                    >
                        {
                            users &&
                            users.map(({bio, id, name, src, email}) => {

                                if (id === userID) {
                                    return (
                                        <Box as="section" pt="20" pb="12" position="relative" key={id}>
                                            <Box position="absolute"
                                                 inset="0"
                                                 height="32"
                                                 bg="blue.600"
                                                 rounded={{
                                                     sm: 'lg',
                                                 }}
                                            />
                                            <CardWithAvatar
                                                maxW="xl"
                                                avatarProps={{
                                                    src,
                                                    name,
                                                }}
                                                action={
                                                    <Button size="sm" leftIcon={<HiPencilAlt/>}>
                                                        Edit
                                                    </Button>
                                                }
                                            >
                                                {/*children*/}
                                                <CardContent>
                                                    <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
                                                        {name}
                                                    </Heading>

                                                    <Text color={useColorModeValue('gray.600', 'gray.400')}>
                                                        {bio}
                                                        <ul style={{listStyle: 'none'}}>
                                                            <strong>User ID:</strong>
                                                            <li>{id}</li>
                                                            <strong>Email:</strong>
                                                            <li>{email}</li>
                                                        </ul>
                                                    </Text>

                                                    <UserInfo
                                                        location="Denver, CO"
                                                        website="immertec.com"
                                                        memberSince="Joined Nov. 2021"
                                                        mt="3"
                                                        // rest={{
                                                        //     justify: 'center'
                                                        // }}
                                                    />
                                                </CardContent>
                                            </CardWithAvatar>
                                        </Box>
                                    )
                                }
                            })
                        }
                    </Flex>
            }
        </Layout>
    )
}



