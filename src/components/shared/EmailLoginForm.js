import * as React from 'react'
import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

export const EmailLoginForm = (props) => (
    <chakra.form
        onSubmit={(e) => {
            e.preventDefault()
           // TODO add logic

        }}
        {...props}
    >
        <Stack spacing="6">
            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input name="email" type="email" autoComplete="email" required />
            </FormControl>
            <PasswordField />
            <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                Create Account
            </Button>
        </Stack>
    </chakra.form>
)


// import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
// import { chakra, useColorModeValue } from '@chakra-ui/system'
//
// export const EmailLoginForm = (props) => (
//     <chakra.form width="full" {...props}>
//         <FormControl>
//             <Input
//                 placeholder="Email address"
//                 _placeholder={{
//                     color: useColorModeValue('gray.600', 'gray.400'),
//                 }}
//             />
//         </FormControl>
//         <Button mt="3" isFullWidth fontSize="sm" fontWeight="bold" colorScheme="gray" isDisabled>
//             Continue
//         </Button>
//     </chakra.form>
// )