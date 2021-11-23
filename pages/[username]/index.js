import {Box, Text} from '@chakra-ui/react'
import {useRouter} from 'next/router';

export default function RenderUserProfile() {

    const router = useRouter()
    console.log('() => RenderUserProfile, Line 7'
        , router)

    // console.log(router)

    return (

        <Box>
            <h1>{router.query?.username}</h1>
            <Text>user profile page</Text>
        </Box>
    )
}