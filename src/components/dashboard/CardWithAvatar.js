import { Avatar, Box, Flex, useColorModeValue } from '@chakra-ui/react'

export const CardWithAvatar = (props) => {
    const { children, avatarProps, ...rest } = props
    return (
        <Flex
            direction="column"
            minH={'32vh'}
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
            <Box position="absolute" inset="0" height="20" bg="blue.600" roundedTop="inherit" />
            <Avatar size="xl" {...avatarProps} />
            {children}
        </Flex>
    )
}


// import {Avatar, Box, Flex, useColorModeValue} from '@chakra-ui/react'
// import * as React from 'react'
//
// export const CardWithAvatar = ({action, avatarProps, children, ...rest}) => {
//     return (
//         <Flex
//             position="relative"
//             direction="column"
//             align={{
//                 sm: 'center',
//             }}
//             maxW="2xl"
//             mx="auto"
//             bg={useColorModeValue('white', 'gray.700')}
//             shadow={{
//                 sm: 'base',
//             }}
//             rounded={{
//                 sm: 'lg',
//             }}
//             px={{
//                 base: '6',
//                 md: '8',
//             }}
//             pb={{
//                 base: '6',
//                 md: '8',
//             }}
//             {...rest}
//         >
//             <Avatar
//                 mt="-10"
//                 borderWidth="6px"
//                 borderColor={useColorModeValue('white', 'gray.700')}
//                 size="xl"
//                 {...avatarProps}
//             />
//             <Box
//                 position="absolute"
//                 top="4"
//                 insetEnd={{
//                     base: '6',
//                     md: '8',
//                 }}
//             >
//                 {action}
//             </Box>
//             {children}
//         </Flex>
//     )
// }