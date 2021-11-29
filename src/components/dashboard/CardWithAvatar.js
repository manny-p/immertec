import {Avatar, Box, Flex, useColorModeValue} from '@chakra-ui/react'

export const CardWithAvatar = ({avatarProps, children, ...rest}) => {
    return (
        <Box
            p=".5rem"
        >
            <Flex
                direction="column"
                minH='20rem'
                maxW='12rem'
                overflowY={'scroll'}
                align="center"
                rounded="md"
                padding="8"
                position="relative"
                bg={useColorModeValue('white', 'gray.700')}
                shadow={{
                    md: 'base',
                }}

                {...rest}
            >
                <Box position="absolute" inset="0" height="20" bg="blue.600" roundedTop="inherit"/>
                <Avatar size="xl" {...avatarProps} />
                {children}
            </Flex>
        </Box>
    )
}
