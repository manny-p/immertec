import * as React from 'react'
import {HStack, Icon, Text, useColorModeValue, VStack} from '@chakra-ui/react'
import {FaKey} from 'react-icons/fa'

export const UserInfo = ({bio, isAdmin, name, ...stackProps}) => {
    return (
        <VStack spacing="1" flex="1" {...stackProps} mb=".25rem">
            <HStack>
                <Text fontWeight="bold">{name}</Text>
            </HStack>
            <Text
                fontSize="sm"
                textAlign="center"
                noOfLines={2}
                color={useColorModeValue('gray.600', 'gray.400')}
            >
                {bio}
            </Text>
            <HStack>
                <Text
                    fontSize="md"
                    textAlign="center"
                    noOfLines={2}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontWeight="bold"
                >
                    {isAdmin && 'Admin'}
                </Text>
                {isAdmin && <Icon as={FaKey} color="orange.400" verticalAlign="text-bottom"/>}
            </HStack>
        </VStack>
    )
}

